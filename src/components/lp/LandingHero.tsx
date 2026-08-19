import type { LandingContent } from '../../types/landing';
import PortraitFrame from './PortraitFrame';
import WhatsAppCTA from './WhatsAppCTA';

type LandingHeroProps = {
  hero: LandingContent['hero'];
  page: string;
  message: string;
};

/**
 * Primeira dobra.
 *
 * Duas restrições moldam este bloco.
 *
 * 1. Em 390×844, com a navbar fixa consumindo ~88px, H1, subtítulo e CTA
 *    precisam caber sem rolagem. Por isso a foto grande vem DEPOIS do CTA no
 *    mobile: quem chega do anúncio decide nos primeiros segundos, e empurrar o
 *    botão para fora da tela para mostrar uma imagem é uma troca ruim. O rosto
 *    ainda aparece acima da dobra, no retrato pequeno ao lado do nome.
 * 2. No desktop a foto é a metade direita da composição, não um enfeite.
 *
 * Sem framer-motion aqui: acima da dobra, animação de entrada só atrasa o H1,
 * que é o LCP.
 */
export default function LandingHero({ hero, page, message }: LandingHeroProps) {
  // A ênfase serifada precisa ser sufixo literal do H1. Não sendo, o título
  // sai inteiro em sans em vez de renderizar um trecho solto e errado.
  const accent =
    hero.h1Accent && hero.h1.endsWith(hero.h1Accent) ? hero.h1Accent : null;
  const lead = accent ? hero.h1.slice(0, hero.h1.length - accent.length) : hero.h1;

  return (
    <section className="bg-primary-950 text-white">
      <div className="container">
        <div className="grid items-center gap-10 pb-14 pt-8 md:grid-cols-[1.05fr,0.95fr] md:gap-14 md:pb-20 md:pt-14">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <img
                src="/images/larissa1.webp"
                alt="Larissa Nunes, psicóloga, no consultório"
                width={96}
                height={96}
                loading="eager"
                decoding="sync"
                className="h-12 w-12 shrink-0 rounded-full object-cover object-top ring-2 ring-primary-700 md:hidden"
              />
              <p className="text-sm font-medium text-primary-200">{hero.eyebrow}</p>
            </div>

            <h1 className="mt-5 text-[2rem] font-bold leading-[1.1] tracking-tight md:text-[3.25rem]">
              {lead}
              {accent ? (
                <span className="font-serif font-normal italic text-primary-300">{accent}</span>
              ) : null}
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-primary-100 md:text-lg md:leading-8">
              {hero.subtitle}
            </p>

            <div className="mt-8">
              <WhatsAppCTA
                label={hero.ctaLabel}
                message={message}
                page={page}
                section="hero"
              />
              <p className="mt-3 text-sm leading-6 text-primary-200">{hero.microcopy}</p>
            </div>

            <dl className="mt-9 grid max-w-md grid-cols-3 gap-4 border-t border-primary-800 pt-6 text-sm">
              {[
                // Fatos, não métricas de vaidade: são as três perguntas que
                // quem chega do anúncio faz antes de qualquer outra coisa.
                // O CRP não se repete aqui porque já está no `eyebrow`.
                ['Onde', 'Online, todo o Brasil'],
                ['Sessão', '50 minutos'],
                ['Abordagem', 'Logoterapia'],
              ].map(([term, value]) => (
                <div key={term}>
                  <dt className="text-primary-300">{term}</dt>
                  <dd className="mt-1 font-medium text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <PortraitFrame
            src="/images/larissa3.webp"
            alt="Larissa Nunes sentada na poltrona do consultório, perto da janela"
            priority
            className="mx-auto w-full max-w-sm md:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}

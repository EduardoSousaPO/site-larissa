import { Link } from 'react-router-dom';
import type { LandingContent } from '../../types/landing';

type ArtigosRelacionadosProps = {
  artigos: LandingContent['artigos'];
};

/**
 * Links internos da LP para artigos do blog.
 *
 * Este é o único sentido de linkagem que eu controlo no código: os posts vivem
 * no Supabase e são editados pelo painel, então o caminho blog → LP fica
 * documentado em docs/ads/03-links-internos.md para aplicação manual.
 *
 * Eram três cartões com resumo. Viraram três linhas: quem chega do anúncio não
 * vai ler artigo antes de decidir, e dar a eles o mesmo peso visual das seções
 * de conversão só oferece uma saída da página. O valor aqui é de SEO — o link
 * continua inteiro, com o resumo como texto secundário na mesma linha.
 */
export default function ArtigosRelacionados({ artigos }: ArtigosRelacionadosProps) {
  return (
    <section className="bg-canvas-50 py-14 md:py-16">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-[0.8fr,1.2fr] md:gap-16">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{artigos.title}</h2>
            <p className="mt-2 text-sm leading-7 text-gray-600">{artigos.intro}</p>
          </div>

          <ul className="border-t border-canvas-300">
            {artigos.items.map((artigo) => (
              <li key={artigo.slug} className="border-b border-canvas-300">
                <Link
                  to={`/blog/${artigo.slug}`}
                  className="group flex flex-col gap-1 py-4 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
                >
                  <span className="text-base font-medium leading-7 text-gray-900 underline decoration-canvas-300 underline-offset-4 transition group-hover:decoration-primary-600">
                    {artigo.titulo}
                  </span>
                  <span className="text-sm leading-6 text-gray-600">{artigo.resumo}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

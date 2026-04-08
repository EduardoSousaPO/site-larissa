import { motion } from 'framer-motion';
import { createWhatsAppProps } from '../../lib/whatsapp';

const HeroSection = () => {
  const whatsappProps = createWhatsAppProps({
    page: 'home',
    section: 'hero',
  });

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.18),_transparent_35%),linear-gradient(180deg,_#faf7ff_0%,_#ffffff_55%,_#f4fbf7_100%)] py-20 md:py-28">
      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr,0.85fr]">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary-700">
              Logoterapia em Goiania e online
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Quem tem um porque, suporta qualquer como
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-700 lg:mx-0">
              Psicoterapia com Logoterapia para voce que sente que esta vivendo sem rumo.
              Encontre o sentido que transforma sofrimento em direcao.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                {...whatsappProps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-200 transition hover:bg-primary-800"
              >
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Quero falar com a Dra. Larissa
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Atendimento online para todo o Brasil. Primeira conversa pelo WhatsApp.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-6 top-8 h-32 w-32 rounded-full bg-primary-200/40 blur-3xl" />
            <div className="absolute -right-6 bottom-8 h-40 w-40 rounded-full bg-emerald-200/50 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-3 shadow-2xl shadow-primary-100">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 via-transparent to-emerald-100/30" />
              <picture className="relative z-10 block">
                <source srcSet="/images/larissa3.webp" type="image/webp" />
                <img
                  src="/images/larissa3.jpeg"
                  alt="Dra. Larissa Nunes sorrindo em retrato profissional para a homepage do consultorio"
                  width="1024"
                  height="1024"
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
                />
              </picture>
              <div className="relative z-10 mx-3 -mt-10 rounded-[1.5rem] border border-white/80 bg-white/90 p-5 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-700">
                  Psicoterapia com direcao
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-700">
                  A Logoterapia e a abordagem do sentido. Dra. Larissa Nunes trabalha para
                  transformar sofrimento em direcao com um processo firme, acolhedor e claro.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

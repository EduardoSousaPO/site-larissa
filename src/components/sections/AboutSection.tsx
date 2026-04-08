import { motion } from 'framer-motion';
import PhotoAnimation from '../PhotoAnimation';
import { CRP } from '../../config/site';
import { createWhatsAppProps } from '../../lib/whatsapp';

const AboutSection = () => {
  const images = [
    {
      src: '/images/larissa1.png',
      webpSrc: '/images/larissa1.webp',
      alt: 'Dra. Larissa Nunes em retrato profissional usado na secao Sobre',
    },
    {
      src: '/images/larissa2.jpeg',
      webpSrc: '/images/larissa2.webp',
      alt: 'Foto da Dra. Larissa Nunes em ambiente de estudio para apresentacao institucional',
    },
  ];
  const whatsappProps = createWhatsAppProps({
    page: 'home',
    section: 'about',
    message: 'Ola! Quero conhecer melhor a abordagem da Dra. Larissa Nunes.',
  });

  return (
    <section className="scroll-mt-28 bg-white py-20" id="sobre">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary-700">
            Sobre
          </p>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Quem vai caminhar com voce
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.78fr,1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -right-4 top-6 h-32 w-32 rounded-full bg-primary-100 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-50 p-3 shadow-xl">
              <div className="overflow-hidden rounded-[1.5rem] shadow-lg">
                <PhotoAnimation
                  images={images}
                  effectType="fade"
                  interval={6000}
                  className="aspect-[4/5] h-full w-full"
                />
              </div>
              <div className="rounded-[1.5rem] bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-700">
                  Credenciais
                </p>
                <p className="mt-2 text-sm leading-7 text-gray-700">{CRP}</p>
                <p className="text-sm leading-7 text-gray-700">Psicologa clinica especializada em Logoterapia</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-lg leading-8 text-gray-700">
              Sou a Dra. Larissa Nunes, psicologa clinica especializada em Logoterapia — a
              abordagem criada por Viktor Frankl que ajuda pessoas a encontrarem sentido mesmo
              nos momentos mais dificeis.
            </p>
            <p className="text-lg leading-8 text-gray-700">
              Nos ultimos anos, acompanhei pessoas passando por situacoes que testam qualquer
              limite humano: tratamentos de hemodialise, perdas irreparaveis, crises que
              pareciam nao ter saida.
            </p>
            <p className="text-lg leading-8 text-gray-700">
              O que aprendi com cada uma delas e que o sofrimento nao precisa ser o fim da
              historia. Quando voce encontra o seu porque, ate o peso mais pesado fica
              suportavel.
            </p>
            <p className="text-lg leading-8 text-gray-700">
              Meu trabalho nao e reviver seu passado. E te ajudar a construir uma direcao clara
              para o presente — com proposito, com firmeza, com sentido.
            </p>
            <a
              {...whatsappProps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-primary-200 bg-primary-50 px-6 py-3 font-semibold text-primary-800 transition hover:border-primary-300 hover:bg-primary-100"
            >
              Quero conhecer essa abordagem
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { motion } from 'framer-motion';
import PhotoAnimation from '../PhotoAnimation';
import { CRP } from '../../config/site';
import { createWhatsAppProps } from '../../lib/whatsapp';

const AboutSection = () => {
  const images = [
    {
      src: '/images/larissa1.png',
      webpSrc: '/images/larissa1.webp',
      alt: 'Dra. Larissa Nunes em retrato profissional usado na seção Sobre',
    },
    {
      src: '/images/larissa2.jpeg',
      webpSrc: '/images/larissa2.webp',
      alt: 'Foto da Dra. Larissa Nunes em ambiente de estúdio para apresentação institucional',
    },
  ];
  const whatsappProps = createWhatsAppProps({
    page: 'home',
    section: 'about',
    message: 'Olá! Quero conhecer melhor a abordagem da Dra. Larissa Nunes.',
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
            Quem vai te escutar de verdade
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
                <p className="text-sm leading-7 text-gray-700">
                  Psicóloga clínica • Criadora do Método S.E.R. • Formação em Logoterapia
                </p>
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
              Sou a Dra. Larissa Nunes, psicóloga clínica. No meu consultório, atendo, na maior
              parte, <strong className="font-semibold text-gray-900">mulheres que aprenderam a
              se esforçar demais e a se colocar depois de todo mundo</strong> — e que chegam aqui
              exaustas de sentir que isso não é valorizado.
            </p>
            <p className="text-lg leading-8 text-gray-700">
              São mulheres que guardam mágoa em silêncio, que se sentem invisíveis dentro da
              própria casa, que explodem e depois se culpam, que se doam e recebem pouco em
              troca. Elas chegam cansadas — não do corpo, do emocional.
            </p>
            <p className="text-lg leading-8 text-gray-700">
              Foi acompanhando essas histórias que desenvolvi o{' '}
              <strong className="font-semibold text-gray-900">Método S.E.R. —
              Segurança Emocional Reconstruída</strong>: um processo em três passos que parte
              da Logoterapia de Viktor Frankl e traduz, em prática clínica, o que precisa
              acontecer para você voltar a se sentir segura dentro de si.
            </p>
            <p className="text-lg leading-8 text-gray-700">
              Meu trabalho não é revirar o passado. É te ajudar a parar de reagir pela dor,
              entender o que você sente e construir relações mais leves — com os outros e,
              sobretudo, com você mesma.
            </p>
            <a
              {...whatsappProps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-primary-200 bg-primary-50 px-6 py-3 font-semibold text-primary-800 transition hover:border-primary-300 hover:bg-primary-100"
            >
              Quero conversar com a Dra. Larissa
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

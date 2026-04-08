import { motion } from 'framer-motion';
import CTASection from '../components/sections/CTASection';
import SEOHead from '../components/SEOHead';

const reviews = [
  {
    name: 'Eduardo Sousa',
    rating: 5,
    text: 'Larissa me ajudou em varias questoes, e eu a recomendo sem pensar duas vezes.',
    source: 'Google',
  },
  {
    name: 'Paciente verificado',
    rating: 5,
    text: 'Larissa e uma excelente profissional.',
    source: 'Google',
  },
];

const reviewSchemas = reviews.map((r) => ({
  '@type': 'Review',
  author: { '@type': 'Person', name: r.name },
  reviewRating: { '@type': 'Rating', ratingValue: String(r.rating), bestRating: '5' },
  reviewBody: r.text,
}));

const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Dra. Larissa Nunes',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '4',
    bestRating: '5',
    worstRating: '1',
  },
  review: reviewSchemas,
};

const Depoimentos = () => {
  return (
    <>
      <SEOHead
        title="Avaliacoes e prova social"
        description="Resumo das avaliacoes reais da Dra. Larissa Nunes no Google e informacoes de confianca para quem busca psicoterapia com Logoterapia."
        path="/depoimentos"
        keywords="avaliacoes psicologa goiania, logoterapia, depoimentos, google reviews"
        schema={aggregateRatingSchema}
      />

      <section className="bg-stone-50 py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary-700">
              Depoimentos
            </p>
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
              O que dizem quem encontrou o caminho
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Para evitar qualquer depoimento ficticio, esta pagina mostra apenas o resumo
              verificavel das avaliacoes reais ja registradas no Google para a Dra. Larissa
              Nunes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-primary-200 bg-white p-8 text-center shadow-lg"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700">
              <span>Google Reviews</span>
              <span>5.0 estrelas</span>
            </div>
            <h2 className="mt-6 text-5xl font-bold text-gray-900">4 avaliacoes</h2>
            <p className="mt-4 text-base leading-8 text-gray-700">
              Nota maxima em todas as avaliacoes no Google Maps.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {reviews.map((review, index) => (
              <motion.article
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-700">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i} className="text-yellow-400">&#9733;</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-8 text-gray-700 italic">"{review.text}"</p>
                <p className="mt-3 text-xs text-gray-400">Via {review.source}</p>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-12 max-w-md text-center"
          >
            <a
              href="https://www.google.com/maps/place/Psic%C3%B3loga+Larissa+Nunes/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-primary-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-primary-700"
            >
              Deixe sua avaliacao no Google
            </a>
          </motion.div>
        </div>
      </section>
      <CTASection page="depoimentos" />
    </>
  );
};

export default Depoimentos;

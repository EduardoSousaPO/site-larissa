import { motion } from 'framer-motion';
import {
  GOOGLE_REVIEW_HIGHLIGHTS,
  GOOGLE_REVIEW_SUMMARY,
  GOOGLE_REVIEWS_URL,
} from '../../config/site';

const TestimonialsSection = () => {
  return (
    <section className="bg-stone-50 py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            O que dizem quem encontrou o caminho
          </h2>

          <div className="mt-6 flex justify-center">
            <div className="inline-flex flex-col items-center gap-2 rounded-full bg-primary-50 px-5 py-3 text-sm font-semibold text-primary-700 shadow-sm sm:flex-row sm:gap-3">
              <span>Google Reviews {GOOGLE_REVIEW_SUMMARY.ratingValue.toFixed(1)}</span>
              <span className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index} className="text-yellow-400">
                    &#9733;
                  </span>
                ))}
              </span>
              <span>({GOOGLE_REVIEW_SUMMARY.reviewCount} avaliacoes)</span>
            </div>
          </div>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          {GOOGLE_REVIEW_HIGHLIGHTS.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-700">
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <div className="mt-1 flex gap-0.5" aria-label={`${testimonial.rating} de 5 estrelas`}>
                    {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                      <span key={starIndex} className="text-yellow-400">
                        &#9733;
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-6 text-lg leading-8 text-gray-700">
                "{testimonial.text}"
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition hover:text-primary-800"
          >
            Ver todas as avaliacoes no Google <span aria-hidden="true">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

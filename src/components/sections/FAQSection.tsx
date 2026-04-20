import { useState } from 'react';
import { motion } from 'framer-motion';
import { FAQ_ITEMS } from '../../config/site';

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number>(0);

  return (
    <section id="faq" className="bg-stone-50 py-20">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary-700">
            FAQ
          </p>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Antes de me mandar mensagem, talvez você esteja se perguntando…
          </h2>
        </motion.div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openItem === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenItem(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-8"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-gray-900">{item.question}</span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-base leading-8 text-gray-700 md:px-8">{item.answer}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

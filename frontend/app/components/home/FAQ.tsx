'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Which file formats are supported?',
    answer:
      'We currently support PDF, DOC, and DOCX formats. For the best AI analysis results, we recommend using a standard PDF layout.',
  },
  {
    question: 'Is my personal data secure?',
    answer:
      'Absolutely. We use industry-standard encryption. Your resume is processed privately and is never shared with third parties or used to train public models.',
  },
  {
    question: 'How accurate is the ATS score?',
    answer:
      'Our score is based on common industry filters used by major ATS providers. While not a guarantee, a score above 80 significantly improves your chances.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id='faq' className='w-full py-16 bg-slate-50/50 px-8 md:px-16 lg:px-32'>
      <div className='max-w-3xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-[900] text-[#111111] text-center mb-16'>
          Common Questions
        </h2>

        <div className='space-y-4'>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className='bg-white border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm'
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className='w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors'
                >
                  <span className='font-bold text-[#111111] md:text-lg'>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    size={20}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className='p-6 pt-0 text-slate-500 font-medium leading-relaxed border-t border-slate-50'>
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

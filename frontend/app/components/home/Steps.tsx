// 'use client'

// import React from 'react'

// const steps = [
//   {
//     number: '1',
//     title: 'Upload Resume',
//     desc: 'Simply drag and drop your PDF or DOCX file into the analyzer.',
//   },
//   {
//     number: '2',
//     title: 'AI Analysis',
//     desc: 'Our engine scans for keywords, formatting, and ATS compatibility.',
//   },
//   {
//     number: '3',
//     title: 'Get Results',
//     desc: 'Receive a detailed report with actionable improvements in seconds.',
//   },
// ]

// export default function Steps() {
//   return (
//     <section id='how-it-works' className='w-full py-24 bg-white px-8 md:px-16 lg:px-32'>
//       <div className='max-w-[1440px] mx-auto'>
//         <h2 className='text-3xl md:text-4xl font-[900] text-[#111111] text-center mb-20'>
//           Three Steps to a Better Resume
//         </h2>

//         <div className='grid grid-cols-1 md:grid-cols-3 gap-16'>
//           {steps.map((step, idx) => (
//             <div
//               key={idx}
//               className='flex flex-col items-center text-center group'
//             >
//               {/* Numbered Circle - Matches the deep blue in your UI */}
//               <div className='w-14 h-14 bg-[#074799] rounded-full flex items-center justify-center text-white text-xl font-black mb-8 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform'>
//                 {step.number}
//               </div>

//               <h3 className='text-xl font-bold text-[#111111] mb-4'>
//                 {step.title}
//               </h3>
//               <p className='text-slate-500 font-medium leading-relaxed max-w-[280px]'>
//                 {step.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '1',
    title: 'Upload Resume',
    desc: 'Simply drag and drop your PDF or DOCX file into the analyzer.',
  },
  {
    number: '2',
    title: 'AI Analysis',
    desc: 'Our engine scans for keywords, formatting, and ATS compatibility.',
  },
  {
    number: '3',
    title: 'Get Results',
    desc: 'Receive a detailed report with actionable improvements in seconds.',
  },
]

export default function Steps() {
  return (
    <section
      id='how-it-works'
      className='w-full py-16 bg-white px-8 md:px-16 lg:px-32 overflow-hidden'
    >
      <div className='max-w-[1440px] mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-24'
        >
          <h2 className='text-4xl md:text-5xl font-[900] text-[#111111] tracking-tight'>
            Three Steps to a Better Resume
          </h2>
          <div className='mt-4 h-1.5 w-24 bg-[#074799] mx-auto rounded-full' />
        </motion.div>

        <div className='relative grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12'>
          {/* Background Connector Line (Desktop Only) */}
          <div className='hidden md:block absolute top-7 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent' />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className='flex flex-col items-center text-center group relative z-10'
            >
              {/* Numbered Circle with "Premium" Shadow */}
              <div className='relative'>
                <div className='w-16 h-16 bg-[#074799] rounded-full flex items-center justify-center text-white text-2xl font-black mb-10 shadow-[0_10px_30px_-5px_rgba(7,71,153,0.4)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500'>
                  {step.number}
                </div>

                {/* Subtle Glow Effect behind numbers */}
                <div className='absolute inset-0 bg-[#074799] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500' />
              </div>

              <h3 className='text-2xl font-bold text-[#111111] mb-5 tracking-tight group-hover:text-[#074799] transition-colors'>
                {step.title}
              </h3>
              <p className='text-slate-500 font-medium leading-relaxed max-w-[300px] text-lg'>
                {step.desc}
              </p>

              {/* Decorative Arrow/Indicator for Mobile (Stays vertical) */}
              {idx < steps.length - 1 && (
                <div className='md:hidden mt-12 mb-4 text-slate-200'>
                  <svg
                    width='24'
                    height='48'
                    viewBox='0 0 24 48'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path
                      d='M12 0V46M12 46L6 40M12 46L18 40'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
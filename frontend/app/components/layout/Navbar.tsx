// 'use client'

// import React, { useState } from 'react'
// import Link from 'next/link'
// import { Menu, X } from 'lucide-react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Button from '../shared/Button'

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)

//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'Features', href: '#features' },
//     { name: 'How It Works', href: '#how-it-works' },
//     { name: 'FAQ', href: '#faq' },
//   ]

//   const toggleMenu = () => setIsOpen(!isOpen)

//   return (
//     <nav className='w-full fixed top-0 bg-white/90 backdrop-blur-md z-[100] px-6 md:px-16 lg:px-32 border-b border-slate-100'>
//       <div className='max-w-[1440px] mx-auto h-20 flex items-center justify-between'>
//         {/* Brand Name */}
//         <Link
//           href='#home'
//           className='text-xl font-[900] text-[#074799] tracking-tight z-[101]'
//         >
//           Resume Analyzer
//         </Link>

//         {/* Desktop Navigation */}
//         <div className='hidden md:flex items-center gap-10'>
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className='text-sm font-semibold text-slate-600 hover:text-[#074799] transition-colors'
//             >
//               {link.name}
//             </Link>
//           ))}

//           {/* Desktop CTA - Points to Upload Section */}
//           <Link href='#upload-resume'>
//             <Button className='rounded-lg px-6 py-2.5 text-[13px]'>
//               Analyze resume
//             </Button>
//           </Link>
//         </div>

//         {/* Mobile Toggle Button */}
//         <button
//           className='md:hidden p-2 text-[#074799] z-[101]'
//           onClick={toggleMenu}
//           aria-label='Toggle Menu'
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>

//         {/* Mobile Menu Overlay */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className='fixed inset-0 h-screen bg-white flex flex-col items-center justify-center gap-8 md:hidden'
//             >
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => setIsOpen(false)}
//                   className='text-2xl font-bold text-[#111111] hover:text-[#074799]'
//                 >
//                   {link.name}
//                 </Link>
//               ))}

//               {/* Mobile CTA - Points to Upload Section */}
//               <Link href='#upload-resume' onClick={() => setIsOpen(false)}>
//                 <Button className='rounded-xl px-10 py-4 text-lg'>
//                   Analyze resume
//                 </Button>
//               </Link>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </nav>
//   )
// }

'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../shared/Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'FAQ', href: '#faq' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className='w-full fixed top-0 bg-white/90 backdrop-blur-md z-[100] px-6 md:px-16 lg:px-32 border-b border-slate-100'>
      <div className='max-w-[1440px] mx-auto h-24 flex items-center justify-between relative'>
        {/* 1. Left: Brand Name */}
        <Link
          href='#home'
          className='text-xl font-[900] text-[#074799] tracking-tight z-[101] uppercase'
        >
          Resume Analyzer
        </Link>

        {/* 2. Middle: Desktop Navigation (Absolute Centered) */}
        <div className='hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-10'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='text-[13px] font-bold text-slate-500 hover:text-[#074799] transition-all uppercase tracking-widest'
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* 3. Right: Desktop CTA */}
        <div className='hidden md:block z-[101]'>
          <Link href='#upload-resume'>
            <Button className='rounded-xl px-8 py-3 text-[13px] font-bold shadow-lg shadow-blue-100'>
              Analyze resume
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger (Right aligned, White BG) */}
        <button
          className={`md:hidden z-[101] p-3 rounded-xl transition-all border border-slate-100 bg-white shadow-sm ${
            isOpen ? 'text-[#074799]' : 'text-slate-900'
          }`}
          onClick={toggleMenu}
          aria-label='Toggle Menu'
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className='fixed inset-0 h-screen bg-white flex flex-col items-center justify-center gap-8 md:hidden'
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className='text-3xl font-black text-[#111111] hover:text-[#074799] uppercase tracking-tighter'
                >
                  {link.name}
                </Link>
              ))}

              <Link href='#upload-resume' onClick={() => setIsOpen(false)}>
                <Button className='rounded-[2rem] px-12 py-5 text-xl font-black uppercase tracking-tight shadow-2xl shadow-blue-200'>
                  Analyze resume
                </Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
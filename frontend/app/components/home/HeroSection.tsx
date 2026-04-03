'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Upload } from 'lucide-react'
import Button from '../shared/Button'
import resumeAvartar1 from '../../images/resumeAvartar1.jpg'
import resumeAvartar2 from '../../images/resumeAvartar2.jpg'

export default function HeroSection() {
  return (
    <section
      id='home'
      className='w-full bg-white pt-28 md:pt-40 pb-20 px-6 md:px-16 lg:px-32 overflow-hidden'
    >
      <div className='max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16'>
        {/* Left: Text Content - Headline comes first on all screens now */}
        <div className='flex-1 z-10 text-center md:text-left order-1'>
          <h1 className='text-6xl font-black text-[#111111] leading-[1.15] tracking-tight'>
            Optimize Your Resume for ATS and{' '}
            <span className='text-[#074799]'>Get Hired Faster</span>
          </h1>

          <p className='mt-6 md:mt-8 text-base md:text-md text-slate-500 leading-relaxed max-w-[580px] font-medium mx-auto md:mx-0'>
            Our AI-driven curator scans your resume against thousands of
            industry benchmarks to ensure you pass ATS filters and catch the eye
            of top recruiters.
          </p>

          {/* Social Proof */}
          <div className='mt-8 md:mt-12 flex items-center justify-center md:justify-start gap-3'>
            <div className='flex -space-x-3'>
              {[
                { src: resumeAvartar1, alt: 'User Avatar 1' },
                { src: resumeAvartar2, alt: 'User Avatar 2' },
              ].map((avatar, i) => (
                <div
                  key={i}
                  className='w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-white overflow-hidden shadow-sm relative'
                >
                  <Image
                    src={avatar.src}
                    alt={avatar.alt}
                    fill
                    className='object-cover'
                  />
                </div>
              ))}
            </div>
            <p className='text-[13px] md:text-sm text-slate-500 font-bold'>
              Joined by 10,000+ job seekers this month
            </p>
          </div>

          {/* Buttons */}
          <div className='mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start'>
            <Link href='#upload-resume' className='w-full sm:w-auto'>
              <Button className='rounded-lg px-10 py-4 text-[15px] w-full flex items-center justify-center bg-[#074799] text-white'>
                <Upload size={18} className='mr-2' />
                Upload Resume
              </Button>
            </Link>

            <Link href='#how-it-works' className='w-full sm:w-auto'>
              <Button
                variant='secondary'
                className='rounded-lg px-10 py-4 text-[15px] w-full bg-[#DCE7F9] text-[#074799] border-none'
              >
                See How It Works
              </Button>
            </Link>
          </div>
        </div>

        {/* Right: ATS Graphic - Now naturally follows text on mobile */}
        <div className='flex-1 relative flex justify-center md:justify-end perspective-1000 order-2'>
          <div
            className='relative w-full max-w-[480px] md:max-w-[540px] aspect-[4/3] bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] border border-slate-100 p-6 md:p-8 
            /* Subtle tilt only for desktop */
            transform md:rotate-y-15 md:rotate-x-[5deg] md:rotate-z-[3deg] 
            hover:rotate-0 transition-all duration-700 ease-out cursor-default'
          >
            {/* ATS Score Header */}
            <div className='flex justify-between items-center mb-6 md:mb-8 border-b border-slate-50 pb-4 md:pb-6'>
              <div className='flex flex-col gap-1'>
                <span className='font-bold text-slate-400 text-[10px] md:text-xs tracking-[0.2em] uppercase'>
                  ATS Score
                </span>
                <div className='h-1.5 w-10 md:w-12 bg-[#074799] rounded-full' />
              </div>
              <span className='text-3xl md:text-4xl font-black text-[#10B981]'>
                85/100
              </span>
            </div>

            {/* Progress Bar */}
            <div className='w-full h-3 md:h-4 bg-slate-100 rounded-full overflow-hidden mb-8 md:mb-10'>
              <div className='h-full w-[85%] bg-gradient-to-r from-[#10B981] to-[#34D399] rounded-full shadow-inner' />
            </div>

            {/* Feedback Cards */}
            <div className='space-y-4 md:space-y-5'>
              <div className='flex items-center gap-4 md:gap-5 p-4 md:p-5 bg-emerald-50/50 rounded-2xl border border-emerald-100 shadow-sm'>
                <div className='w-7 h-7 md:w-8 md:h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs shadow-lg shadow-emerald-200 shrink-0'>
                  ✓
                </div>
                <div className='flex flex-col'>
                  <span className='text-[14px] md:text-[15px] font-bold text-emerald-900'>
                    Skill Match Found
                  </span>
                  <span className='text-[10px] md:text-xs text-emerald-700/70 font-medium'>
                    Machine Learning detected in experience
                  </span>
                </div>
              </div>

              <div className='flex items-center gap-4 md:gap-5 p-4 md:p-5 bg-rose-50/50 rounded-2xl border border-rose-100 shadow-sm'>
                <div className='w-7 h-7 md:w-8 md:h-8 rounded-full bg-rose-500 flex items-center justify-center text-white text-xs shadow-lg shadow-rose-200 shrink-0'>
                  !
                </div>
                <div className='flex flex-col'>
                  <span className='text-[14px] md:text-[15px] font-bold text-rose-900'>
                    Keyword Missing
                  </span>
                  <span className='text-[10px] md:text-xs text-rose-700/70 font-medium'>
                    Consider adding "Agile Methodologies"
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

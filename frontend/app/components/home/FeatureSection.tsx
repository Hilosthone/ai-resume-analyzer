'use client'

import React from 'react'
import { Brain, BarChart3, Lightbulb, Key, Zap, Search } from 'lucide-react'

const features = [
  {
    title: 'Skill Extraction',
    desc: 'Automatically identifies core competencies and technical skills hidden in your descriptions.',
    icon: Brain,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    title: 'ATS Score',
    desc: 'Get a real-time score showing how likely you are to pass automated screening systems.',
    icon: BarChart3,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    title: 'Smart Suggestions',
    desc: 'Context-aware advice on phrasing and action verbs to maximize impact.',
    icon: Lightbulb,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    title: 'Keyword Optimization',
    desc: 'Compare your resume to specific job descriptions and identify missing keywords.',
    icon: Key,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
  {
    title: 'Instant Analysis',
    desc: "Processed in under 5 seconds. Get your results while you're still on the page.",
    icon: Zap,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    title: 'AI Scanning',
    desc: 'Our multi-layered AI architecture analyzes your career history from every angle.',
    icon: Search,
    color: 'text-sky-600',
    bg: 'bg-sky-50',
  },
]

export default function FeatureSection() {
  return (
    <section
      id='features'
      className='w-full py-12 px-8 md:px-16 lg:px-32 bg-slate-50/50'
    >
      <div className='max-w-[1440px] mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-[900] text-[#111111] mb-4'>
            Resume Analyzer Features
          </h2>
          <p className='text-slate-500 font-medium max-w-2xl mx-auto'>
            Our multi-layered AI architecture analyzes your career history from
            every angle.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((f, i) => (
            <div
              key={i}
              className='bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300'
            >
              <div
                className={`w-12 h-12 ${f.bg} rounded-xl flex items-center justify-center mb-6`}
              >
                <f.icon className={`w-6 h-6 ${f.color}`} />
              </div>
              <h3 className='text-xl font-bold text-[#111111] mb-3'>
                {f.title}
              </h3>
              <p className='text-slate-500 text-sm leading-relaxed font-medium'>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

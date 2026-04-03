'use client'

import React, { useState, useRef } from 'react'
import {
  FileUp,
  FileText,
  CheckCircle2,
  Loader2,
  X,
  ClipboardPaste,
  BrainCircuit,
  Target,
  Search,
} from 'lucide-react'
import Button from '../shared/Button'
import toast from 'react-hot-toast'

interface AnalysisResult {
  ats_score: number
  skills: string[]
  experience_summary: string
  missing_keywords: string[]
  improvements: string[]
}

export default function UploadZone() {
  const [file, setFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [isPasteMode, setIsPasteMode] = useState(false)
  const [pastedText, setPastedText] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setIsCompleted(false)
      setResult(null)
    }
  }

  const handleAnalyze = async (mode: 'file' | 'text') => {
    setIsAnalyzing(true)
    const baseUrl = 'https://ai-resume-analyzer-backend-o12w.onrender.com'

    try {
      let response
      if (mode === 'file' && file) {
        const formData = new FormData()
        formData.append('file', file)
        response = await fetch(`${baseUrl}/analyze`, {
          method: 'POST',
          body: formData,
        })
      } else {
        response = await fetch(`${baseUrl}/analyze/text`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: pastedText }),
        })
      }

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.detail || 'Analysis failed. Please try a different format.',
        )
      }

      setResult(data)
      setIsCompleted(true)
      toast.success('Analysis Complete!')
    } catch (error: any) {
      console.error('Analysis error:', error)
      toast.error(error.message || 'Failed to connect to the server.')
    } finally {
      setIsAnalyzing(false)
    }
  }

  const resetAll = () => {
    setFile(null)
    setPastedText('')
    setIsCompleted(false)
    setResult(null)
    setIsPasteMode(false)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <section id='upload-resume' className='w-full py-20 bg-white px-6'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-[900] text-[#111111] mb-4'>
            Analyze Your Resume Instantly
          </h2>
          <p className='text-slate-500 font-medium'>
            Get deep AI insights into your resume's ATS performance.
          </p>
        </div>

        <input
          type='file'
          ref={fileInputRef}
          onChange={handleFileChange}
          accept='.pdf,.docx'
          className='hidden'
        />

        <div
          className={`relative group border-2 border-dashed rounded-[2.5rem] transition-all flex flex-col items-center text-center
            ${file || isPasteMode ? 'border-[#074799] bg-blue-50/10' : 'border-slate-200 bg-slate-50/50 hover:border-[#074799]'}
            ${isCompleted ? 'border-none bg-transparent p-0' : 'p-8 md:p-12'}`}
        >
          {!isCompleted ? (
            <>
              {(file || isPasteMode) && !isAnalyzing && (
                <button
                  onClick={resetAll}
                  className='absolute top-4 right-4 bg-white shadow-sm border border-slate-100 text-slate-400 rounded-full p-2 hover:text-rose-500 transition-all'
                >
                  <X size={18} />
                </button>
              )}

              {isPasteMode ? (
                <div className='w-full max-w-2xl'>
                  <textarea
                    value={pastedText}
                    onChange={(e) => setPastedText(e.target.value)}
                    placeholder='Paste your resume content here...'
                    className='w-full h-64 p-6 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-[#074799] outline-none text-slate-700 mb-6 bg-white shadow-inner'
                  />
                  <Button
                    onClick={() => handleAnalyze('text')}
                    disabled={isAnalyzing || !pastedText.trim()}
                    className='rounded-xl px-12 py-4 bg-[#074799]'
                  >
                    {isAnalyzing ? (
                      <Loader2 className='animate-spin' />
                    ) : (
                      'Analyze Content'
                    )}
                  </Button>
                </div>
              ) : (
                <div
                  className='flex flex-col items-center'
                  onClick={() => !file && fileInputRef.current?.click()}
                >
                  <div className='w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 cursor-pointer'>
                    {file ? (
                      <FileText className='text-[#074799]' size={36} />
                    ) : (
                      <FileUp className='text-[#074799]' size={36} />
                    )}
                  </div>
                  {file ? (
                    <div className='mb-6'>
                      <p className='text-[#111111] font-bold text-lg'>
                        {file.name}
                      </p>
                      <p className='text-slate-400 text-sm'>
                        {(file.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3 className='text-xl font-bold text-[#111111] mb-2'>
                        Click to upload resume
                      </h3>
                      <p className='text-slate-400 text-sm font-bold uppercase tracking-wider mb-8'>
                        PDF or DOCX only
                      </p>
                    </>
                  )}
                  {file && (
                    <Button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleAnalyze('file')
                      }}
                      disabled={isAnalyzing}
                      className='rounded-xl px-12 py-4 bg-[#074799]'
                    >
                      {isAnalyzing ? (
                        <Loader2 className='animate-spin' />
                      ) : (
                        'Run AI Analysis'
                      )}
                    </Button>
                  )}
                </div>
              )}

              {!file && !isPasteMode && (
                <div className='mt-8 pt-8 border-t border-slate-100 w-full'>
                  <button
                    onClick={() => setIsPasteMode(true)}
                    className='flex items-center gap-2 text-sm font-bold text-[#074799] hover:underline mx-auto'
                  >
                    <ClipboardPaste size={16} /> Paste Resume Text
                  </button>
                </div>
              )}
            </>
          ) : (
            /* --- DETAILED RESULTS DASHBOARD --- */
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700'>
              {/* Left Column: Summary & Score */}
              <div className='lg:col-span-1 space-y-6'>
                <div className='bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center'>
                  <div
                    className={`text-5xl font-[900] mb-2 ${result?.ats_score! > 70 ? 'text-emerald-600' : 'text-amber-500'}`}
                  >
                    {result?.ats_score}%
                  </div>
                  <p className='text-slate-400 font-bold text-xs uppercase tracking-widest mb-6'>
                    ATS Match Score
                  </p>
                  <Button
                    onClick={resetAll}
                    className='w-full bg-slate-900 text-white rounded-xl py-3 text-xs'
                  >
                    Analyze New
                  </Button>
                </div>

                <div className='bg-[#074799] p-8 rounded-[2rem] text-white text-left'>
                  <BrainCircuit className='mb-4 opacity-50' size={24} />
                  <h4 className='text-xs font-bold uppercase tracking-widest mb-3 opacity-70'>
                    Experience Summary
                  </h4>
                  <p className='text-sm leading-relaxed font-medium'>
                    {result?.experience_summary}
                  </p>
                </div>
              </div>

              {/* Right Column: Skills & Improvements */}
              <div className='lg:col-span-2 space-y-6'>
                <div className='bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-left'>
                  <div className='flex items-center gap-2 mb-4'>
                    <Target size={18} className='text-[#074799]' />
                    <h4 className='text-sm font-bold text-[#111111]'>
                      Identified Skills
                    </h4>
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {result?.skills.map((s, i) => (
                      <span
                        key={i}
                        className='bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-xs font-bold'
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='bg-amber-50/50 border border-amber-100 p-8 rounded-[2rem] text-left'>
                  <div className='flex items-center gap-2 mb-4 text-amber-700'>
                    <Search size={18} />
                    <h4 className='text-sm font-bold'>Critical Improvements</h4>
                  </div>
                  <ul className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    {result?.improvements.map((imp, i) => (
                      <li
                        key={i}
                        className='text-xs text-slate-600 flex gap-2 items-start'
                      >
                        <span className='text-amber-500 mt-0.5'>•</span> {imp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {!isCompleted && (
          <div className='mt-12 flex flex-wrap justify-center gap-8'>
            {['100% Secure', 'Private & Confidential', 'ATS Compliant'].map(
              (text) => (
                <div
                  key={text}
                  className='flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest'
                >
                  <CheckCircle2 size={14} className='text-emerald-500' />
                  {text}
                </div>
              ),
            )}
          </div>
        )}
      </div>
    </section>
  )
}
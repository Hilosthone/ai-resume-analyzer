// 'use client'

// import React from 'react'
// import HeroSection from '@/app/components/home/HeroSection'
// import FeatureSection from '@/app/components/home/FeatureSection'
// import UploadZone from '@/app/components/home/UploadZone'
// import Steps from '@/app/components/home/Steps'
// import FAQ from '@/app/components/home/FAQ'

// export default function Home() {
//   return (
//     /* Using a clean slate background (#F8FAFC) to separate
//        white sections (Hero, Steps) from tinted sections (Features, FAQ).
//     */
//     <div className='flex flex-col bg-[#F8FAFC]'>
//       {/* 1. Hero: The Hook & Primary CTA */}
//       <HeroSection />

//       {/* 2. Features: The "How It Analyzes" Grid */}
//       <FeatureSection />

//       {/* 3. Upload Zone: The "Secluded" Interactive Area
//           Wrapped in a specific container to give it that "fit-in-the-middle" feel.
//       */}
//       <section className='w-full py-12 px-8 md:px-16 lg:px-32 bg-white'>
//         <div className='max-w-[1440px] mx-auto'>
//           <UploadZone />
//         </div>
//       </section>

//       {/* 4. Three Steps: The Simple Onboarding Flow */}
//       <Steps />

//       {/* 5. FAQ: The Trust & Clarity Section */}
//       <FAQ />

//       {/* Added bottom padding to breathe before the footer */}
//       <div className='py-12' />
//     </div>
//   )
// }

'use client'

import React from 'react'
import { Toaster } from 'react-hot-toast'
import HeroSection from '@/app/components/home/HeroSection'
import FeatureSection from '@/app/components/home/FeatureSection'
import UploadZone from '@/app/components/home/UploadZone'
import Steps from '@/app/components/home/Steps'
import FAQ from '@/app/components/home/FAQ'

export default function Home() {
  return (
    /* Main wrapper with a clean slate background to separate white/tinted sections */
    <div className='flex flex-col bg-[#F8FAFC] min-h-screen'>
      {/* 1. Global Toast Notifications 
          Ensures that 'toast.success' or 'toast.error' from UploadZone 
          can be seen regardless of scroll position.
      */}
      <Toaster position='top-center' reverseOrder={false} />

      {/* 2. Hero: The Hook & Primary CTA */}
      <HeroSection />

      {/* 3. Features: Detailed breakdown of the AI capabilities */}
      <FeatureSection />

      {/* 4. The Interactive Core (UploadZone)
          We wrap this in a distinct container to make the interactive 
          analysis feel like the "main event" of the page.
      */}
      <section className='w-full py-20 px-6 md:px-12 bg-white border-y border-slate-100'>
        <div className='max-w-6xl mx-auto'>
          <UploadZone />
        </div>
      </section>

      {/* 5. Steps: Visual guide on how the process works */}
      <Steps />

      {/* 6. FAQ: Addressing common concerns (ATS, Privacy, etc.) */}
      <FAQ />

      {/* 7. Bottom Spacer: Breathing room before the site footer */}
      <div className='py-16' />
    </div>
  )
}
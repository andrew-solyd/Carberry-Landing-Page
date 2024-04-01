// page.tsx

"use client"

import { useEffect, useState, useRef, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

import Header from '@/components/universal/header'
import Hero from '@/components/landing/hero'
import ValueProp from '@/components/landing/value-prop'
import StoreLogos from '@/components/landing/stores'
import WaitlistCTA from '@/components/landing/waitlist-cta'
import Footer from '@/components/universal/footer'

import getVariations, { LandingPage }  from '@/components/landing/variations'

import { trackHit } from '@/helpers/tracking'

export default function Home() {
  return (
    <Suspense fallback={<div></div>}>
      <Content />
    </Suspense>
  )
}

function usePageLoad(callback: () => void) {
  useEffect(() => {
    const checkAndExecute = () => {
      if (document.readyState === 'complete') {
        callback();
      } else {
        window.addEventListener('load', callback);
        return () => window.removeEventListener('load', callback);
      }
    };

    checkAndExecute();
  }, [callback]);
}

function Content() {

  const searchParams = useSearchParams() 
  const [variation, setVariation] = useState<LandingPage | null>(null)
  const utmRef = useRef<number | undefined>()

  useEffect(() => {

		// get variations data
    const fetchVariations = async () => {
      if (!searchParams) return
      const utmParam = searchParams.get('utm_content')
      utmRef.current = utmParam ? Number(utmParam) : undefined // Use useRef to persist value
      const variations = await getVariations({ utm: utmRef.current })
      setVariation(variations)
    }
    fetchVariations()
  }, [searchParams])

		 // Use the custom hook to track the hit after the page has fully loaded
  usePageLoad(() => {
    trackHit().catch(console.error)
  })

  if (!variation) {
    return  // Or some other loading state
  }
  
  return (
    <main className="flex flex-col items-center">
      <div className="px-7 mt-5 sm:mt-2 w-full">
        <Header  />
      </div>
      <div className="flex flex-col items-center mt-10 sm:mt-5 mb-5 px-3 w-full">
        <Hero variation={variation} />
      </div>
      <div className="mt-10 mb-10 w-full">
        <div className=""><ValueProp variation={variation} /></div>        
      </div>      
      <div className="mb-10 w-full">
        <div className="sm:mt-10"><WaitlistCTA variation={variation}  /></div>        
      </div>
      <div className="mt-10 w-full">
        <Footer/>
      </div>
    </main>
  )
}


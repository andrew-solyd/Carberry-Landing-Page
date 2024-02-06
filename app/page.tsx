// page.tsx

"use client"

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'

import Header from '@/components/universal/header'
import Hero from '@/components/landing/hero'
import ValueProp from '@/components/landing/value-prop'
import StoreLogos from '@/components/landing/stores'
import WaitlistCTA from '@/components/landing/waitlist-cta'
import Footer from '@/components/universal/footer'

import getVariations, { LandingPage }  from '@/components/landing/variations'

export default function Home() {  

  const router = useRouter()
  const [variation, setVariation] = useState<LandingPage | null>(null)
  const utmRef = useRef<number | undefined>()

  useEffect(() => {
    // You can directly access the query parameters from the router object
    const utmParam = router.query.utm
    utmRef.current = utmParam ? Number(utmParam) : undefined
    const fetchVariations = async () => {
      const variations = await getVariations({ utm: utmRef.current })
      setVariation(variations)
    };
    if (router.isReady) {
      fetchVariations();
    }
  }, [router.isReady, router.query.utm]); 

  if (!variation) {
    return <div>Loading...</div>; // Or some other loading state
  }
  
  return (
    <main className="flex flex-col items-center">
      <div className="px-7 mt-2 w-full">
        <Header  />
      </div>
      <div className="flex flex-col items-center mt-5 mb-5 px-3 w-full">
        <Hero variation={variation} />
      </div>
      <div className="sm:mt-10 mb-10 w-full">
        <div className="sm:mb-10"><StoreLogos/></div>        
      </div>
      <div className="mb-10 w-full">
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


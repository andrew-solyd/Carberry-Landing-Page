// page.tsx

"use client"

import { useEffect, useState, useRef } from 'react'
import { useSearchParams } from 'next/navigation'

import Header from '@/components/universal/header'
import Hero from '@/components/landing/hero'
import ValueProp from '@/components/landing/value-prop'
import StoreLogos from '@/components/landing/stores'
import WaitlistCTA from '@/components/landing/waitlist-cta'
import Footer from '@/components/universal/footer'

import getVariations, { VariationResult }  from '@/components/landing/variations'

export default function Home() {  

  const searchParams = useSearchParams() 
  const [variation, setVariation] = useState<VariationResult | null>(null)
  const utmRef = useRef<number | undefined>()

  useEffect(() => {
    const fetchVariations = async () => {
      if (!searchParams) return
      const utmParam = searchParams.get('utm')
      utmRef.current = utmParam ? Number(utmParam) : undefined // Use useRef to persist value
      const variations = await getVariations({ utm: utmRef.current })
      setVariation(variations)
    };
    fetchVariations();
  }, [searchParams]);

  if (!variation) {
    return <div>Loading...</div>; // Or some other loading state
  }
  
  return (
    <main className="flex flex-col items-center">
      <div className="px-7 mt-2 w-full">
        <Header  />
      </div>
      <div className="flex flex-col items-center sm:mt-5 mb-5 px-10 w-full">
        <Hero header={variation.header} subheader={variation.subheader} image={variation.image} cta={variation.cta} utm={utmRef.current}/>
      </div>
      <div className="sm:mt-10 mb-10 w-full">
        <div className="sm:mt-10 sm:mb-10"><StoreLogos/></div>        
      </div>
      <div className="mb-10 w-full">
        <div className=""><ValueProp propsHeader={variation.propsHeader} props={variation.props} /></div>        
      </div>      
      <div className="mb-10 w-full">
        <div className="sm:mt-10"><WaitlistCTA bottomParagraph={variation.bottomParagraph}/></div>        
      </div>
      <div className="mt-10 w-full">
        <Footer/>
      </div>
    </main>
  )
}

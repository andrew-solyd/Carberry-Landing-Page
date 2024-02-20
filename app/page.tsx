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

export default function Home() {  

  return (
    <Suspense fallback={<div>Loading...</div>}> {/* Add Suspense here with a fallback */}			
      <Content />
    </Suspense>
  )
}

function Content() {

  const searchParams = useSearchParams() 
  const [variation, setVariation] = useState<LandingPage | null>(null)
  const utmRef = useRef<number | undefined>()

  useEffect(() => {
		// Function to track the hit
		const trackHit = async () => {
			// Capture the full URL, including query parameters (UTMs, etc.)
			const url = window.location.href
			const referrer = document.referrer

			// Send the URL to the API route
			await fetch('/api/hit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ url, referrer }), // Send the URL in the request body
			})
		}

  	trackHit().catch(console.error);
		// get variations data
    const fetchVariations = async () => {
      if (!searchParams) return
      const utmParam = searchParams.get('utm')
      utmRef.current = utmParam ? Number(utmParam) : undefined // Use useRef to persist value
      const variations = await getVariations({ utm: utmRef.current })
      setVariation(variations)
    }
    fetchVariations()
  }, [searchParams])

  if (!variation) {
    return  // Or some other loading state
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


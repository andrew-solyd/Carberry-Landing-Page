// page.tsx

"use client"

import { useSearchParams } from 'next/navigation'

import Header from '@/components/universal/header'
import Hero from '@/components/landing/hero'
import ValueProp from '@/components/landing/value-prop'
import StoreLogos from '@/components/landing/stores'
import WaitlistCTA from '@/components/landing/waitlist-cta'
import Footer from '@/components/universal/footer'

export default function Home() {  

  const searchParams = useSearchParams() 
  let utm: string | undefined | null = undefined
  
  if (searchParams) {
    utm = searchParams.get('utm')
  }
  
  return (
    <main className="flex flex-col items-center">
      <div className="px-7 mt-2 w-full">
        <Header/>
      </div>
      <div className="flex flex-col items-center sm:mt-5 mb-5 px-10 w-full">
        <Hero utm = {utm} />
      </div>
      <div className="sm:mt-10 mb-10 w-full">
        <div className="sm:mt-10 sm:mb-10"><StoreLogos/></div>        
      </div>
      <div className="mb-10 w-full">
        <div className=""><ValueProp utm = {utm} /></div>        
      </div>      
      <div className="mb-10 w-full">
        <div className="sm:mt-10"><WaitlistCTA utm = {utm}/></div>        
      </div>
      <div className="mt-10 w-full">
        <Footer/>
      </div>
    </main>
  )
}

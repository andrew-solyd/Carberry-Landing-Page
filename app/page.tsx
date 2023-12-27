// page.tsx

"use client"

import Header from '@/components/header'
import Hero from '@/components/hero'
import ValueProp from '@/components/value-prop'
import StoreLogos from '@/components/stores'
import WaitlistCTA from '@/components/waitlist-cta'
import Footer from '@/components/footer'

export default function Home() {  

  
  return (
    <main className="flex flex-col items-center">
      <div className="px-7 mt-2 w-full">
        <Header/>
      </div>
      <div className="flex flex-col items-center mt-5 mb-5 px-10 w-full">
        <Hero/>
      </div>
      <div className="mt-10 mb-10 w-full">
        <div className="mt-10 mb-10"><StoreLogos/></div>        
      </div>
      <div className="mb-10 w-full">
        <div className=""><ValueProp/></div>        
      </div>      
      <div className="mb-10 w-full">
        <div className="sm:mt-10"><WaitlistCTA/></div>        
      </div>
      <div className="mt-10 w-full">
        <Footer/>
      </div>
    </main>
  )
}

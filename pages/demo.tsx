// pages/demo.tsx


import '@/app/globals.css'

import Header from '@/components/header'
import ValueProp from '@/components/value-prop'
import Footer from '@/components/footer'

export default function Demo() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <main className="flex flex-col items-center">
        <div className="px-7 mt-2 w-full">
          <Header/>
        </div>
  
      </main>
      <div className="mt-10 w-full">
        <Footer/>
      </div>
    </div>
  )
}

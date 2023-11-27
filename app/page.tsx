
import Header from '@/components/header'
import Hero from '@/components/hero'
import Compare from '@/components/compare'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="mt-5 px-7 w-full">
        <Header/>
      </div>
      <div className="flex flex-col items-center mt-2 sm:mt-10 px-10 w-full">
        <Hero/>
      </div>
      <div className="mb-10 w-full">
        <Compare/>
      </div>
      <div className="mt-10 w-full mb-10">        
      </div>
    </main>
  )
}

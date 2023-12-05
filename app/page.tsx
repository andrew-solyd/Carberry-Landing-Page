
import Header from '@/components/header'
import Hero from '@/components/hero'
import Compare from '@/components/compare'
import PromptBar from '@/components/prompt-bar'
import ValueProp from '@/components/value-prop'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="mt-5 px-7 w-full">
        <Header/>
      </div>
      <div className="flex flex-col items-center mt-5 sm:mt-10 px-10 w-full">
        <Hero/>
      </div>
      <div className="mt-10 mb-10 w-full">
        <div className="sm:mt-10"><ValueProp/></div>        
      </div>
      <div className="mb-10 w-full">
        <div className="sm:mt-10"><Compare/></div>
      </div>
      <div className="hidden mb-10 w-full">
        <PromptBar/>
      </div>
      <div className="mt-10 w-full">
        <Footer/>
      </div>
    </main>
  )
}

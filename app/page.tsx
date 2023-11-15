
import Header from '@/components/header'
import Hero from '@/components/hero'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="mt-5 px-10 w-full">
        CartBerry
      </div>
      <div className="flex flex-col items-center mt-2 sm:mt-10 px-10 w-full">
        <Hero/>
      </div>
    </main>
  )
}

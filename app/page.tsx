
import Header from '@/components/header'
import Hero from '@/components/hero'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="mt-5 px-10 w-full">
        CartBerry
      </div>
      <div className="mt-2 sm:mt-5 px-10 w-full">
        <Hero/>
      </div>
    </main>
  )
}

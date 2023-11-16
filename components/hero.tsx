import Image from 'next/image'

const Hero = () => {
  return (

    <div className="flex flex-col sm:flex-row">
      <div className="w-full flex justify-end sm:min-w-[475px] sm:max-w-[700px]">
        <div className="flex flex-col justify-center py-5 px-2 sm:py-0 sm:pr-10 sm:w-4/5">
          <h1 className="text-4xl">
            {"Feeding a family shouldn't be this expensive"}
          </h1>
          <p className="mt-4">
            {"Save time and money on every shop — Cartberry finds you the best deals for healthy, organic foods at your go-to stores."}
          </p>
          <div className="hidden sm:flex mt-4 justify-end pr-2">
            <button className="bg-transparent hover:bg-zinc-900 hover:text-white text-xs py-2 px-2 border border-zinc-900 hover:border-transparent rounded">
              Discover the difference
            </button>
          </div>
        </div>
      </div>        
      <div className="w-full sm:min-w-[300px] flex flex-col items-center sm:items-start sm:pl-5">
        <div className="rounded-lg overflow-hidden m-1">
          <Image src="/hero.png" alt="Photo of woman in supermarket with concerned face" width={350} height={350} />
        </div>
      </div>
    </div>

  )
}

Hero.displayName = 'Hero'

export default Hero
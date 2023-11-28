import Image from 'next/image'

const Hero = () => {

  const subheader_v1 = "Save time and money on every shop — Cartberry finds you the best deals for healthy, organic foods at your go-to stores."

  const subheader_v2 = "Find the best organic deals in seconds. Get instant cash savings every time you shop. Cartberry — your key to affordable, healthy eating."

  const subheader_v3 = "Find the best organic deals in seconds. Get instant cash savings every time you shop. Cartberry — your AI co-pilot for savvy grocery shopping."

  return (

    <div className="flex flex-col sm:flex-row">
      <div className="w-full flex justify-end sm:min-w-[475px] sm:max-w-[700px]">
        <div className="flex flex-col justify-center pb-5 px-2 sm:py-0 sm:pr-10 sm:w-4/5">
          <h1 className="text-center sm:text-left text-4xl">
            Feeding a family shouldn't be this expensive
          </h1>
          <p className="mt-4 text-center sm:text-left">
            {subheader_v3}
          </p>
          <div className="hidden sm:flex mt-4 justify-end pr-2">
            <button className="bg-transparent hover:bg-zinc-900 hover:text-white text-xs p-2 border border-zinc-900 hover:border-transparent rounded">
              See the difference
            </button>
          </div>
        </div>
      </div>        
      <div className="w-full sm:min-w-[300px] flex flex-col items-center sm:items-start sm:pl-5">
        <div className="rounded-lg overflow-hidden m-1">
          <Image src="/hero.png" alt="Photo of woman in supermarket with concerned face" width={350} height={350} priority/>
        </div>
      </div>
    </div>

  )
}

Hero.displayName = 'Hero'

export default Hero
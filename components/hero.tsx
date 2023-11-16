import Image from 'next/image'

const Hero = () => {
  return (

    <div className="flex flex-col sm:flex-row sm:justify-between items-start">
      <div className="w-full w-80 sm:w-80 flex flex-col items-center sm:justify-start sm:items-start py-5 px-2 sm:p-5">
        <h1 className='text-4xl'>
          {"Feeding a family shouldn't be this expensive"}
        </h1>
        <p className='mt-4'>
          {"Save time and money on every shop — Cartberry finds you the best deals for healthy, organic foods at your go-to stores."}
        </p>
      </div>        
      <div className="w-full sm:w-1/2 flex flex-col items-center">
        <div className="rounded-lg overflow-hidden m-1">
          <Image src="/hero.png" alt="Photo of woman in supermarket with concerned face" width={350} height={350} />
        </div>
      </div>
    </div>

  )
}

Hero.displayName = 'Hero'

export default Hero
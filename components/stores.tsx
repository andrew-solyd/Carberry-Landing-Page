import Image from 'next/image'

const StoreLogos = () => {
  return (
    <div className="mx-5 flex flex-col items-center mb-3 sm:mb-0">
      <div className="items-center w-[350px] sm:w-[375px]">
        <h1 className="text-3xl text-center mb-5 sm:mb-4 font-semibold">
          Where it works
        </h1>        
        <div className="h-[155px] sm:h-[175px] relative" style={{ opacity: 0.8 }}>
          <Image src="/store_logos.png" alt="Logos of stores" className="object-contain" width={500} height={300}/>
        </div>
        <div className="flex flex-row items-center justify-center">
          <span className="text-xs text-center mt-5">More stores coming soon</span>
        </div>
      </div>
    </div>
  )
}

StoreLogos.displayName = 'StoreLogos'

export default StoreLogos
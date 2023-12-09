import Image from 'next/image'

const StoreLogos = () => {
  return (
    <div className="mx-5 flex flex-col items-center mb-3 sm:mb-0">
      <div className="items-center w-[350px] sm:w-[375px]">
        <h1 className="text-3xl text-center mb-4">
          Where it works
        </h1>
        <div className="flex flex-row items-center justify-center">
          <span className="text-xs text-center mb-1">More stores coming soon</span>
        </div>
        <div className="h-[125px] sm:h-[175px] relative">
          <Image src="/store_logos.png" alt="Logos of stores" layout="fill" objectFit="contain"/>
        </div>
      </div>
    </div>
  )
}

StoreLogos.displayName = 'StoreLogos'

export default StoreLogos
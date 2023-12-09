import Image from 'next/image'

const StoreLogos = () => {
  return (
    <div className="mx-5 flex flex-col items-center mb-3 sm:mb-0">
      <div className="w-[350px] sm:w-[375px]">
        <h1 className="text-3xl text-center mb-5">
          Where it works
        </h1>
        <div className="h-[135px] sm:h-[175px] relative">
          <Image src="/store_logos.png" alt="Logos of stores" layout="fill" objectFit="contain"/>
        </div>
      </div>
    </div>
  )
}

StoreLogos.displayName = 'StoreLogos'

export default StoreLogos
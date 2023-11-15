import Image from 'next/image'
import TypedText from '@/components/typed-text'

const Hero = () => {
  return (

    <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-start">          
      <div className="flex flex-col justify-center rounded-lg overflow-hidden m-5">
        <Image src="/hero.png" alt="Photo of woman in supermarket with concerned face" width={350} height={350} />
      </div>
      <div className="flex flex-col justify-center font-mono w-76 sm:w-96 pl-2 sm:pl-6 md:pl-12 pt-2 sm:pt-6">
        <TypedText />
      </div>
    </div>

  )
}

Hero.displayName = 'Hero'

export default Hero
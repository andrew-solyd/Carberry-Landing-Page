import Image from 'next/image'
import TypedText from '@/components/typed-text'

export default () => {
  return (

    <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-start">          
      <div className="rounded-lg overflow-hidden m-5">
        <Image src="/hero.png" alt="Photo of woman in supermarket with concerned face" width={350} height={350} />
      </div>
      <div className="font-mono w-96 pl-6 sm:pl-12 pt-2 sm:pt-6">
        <TypedText />
      </div>
    </div>

  )
}
  
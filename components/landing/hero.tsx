// components/hero.tsx

import Image from 'next/image'
import {useDisclosure} from "@nextui-org/modal"

import EmailModal from '@/components/landing/email-modal'

interface HeroProps {
  header: string
  subheader: string[]
  image: string
  cta: string
  utm?: number | undefined | null
}

const Hero: React.FC<HeroProps> = ({ header, subheader, image, cta, utm  }) => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    onOpen()
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full flex justify-end sm:min-w-[475px] sm:max-w-[700px]">
          <div className="flex flex-col justify-center pb-5 px-2 sm:py-0 sm:pr-10 sm:w-4/5">          
            <h1 className="text-balance text-center sm:text-left text-4xl font-semibold">
              {header}
            </h1>
            <div className="text-balance mt-5 mb-5 sm:mb-0 text-center sm:text-left">
              <p>
                {subheader[0]}
                <span className="font-semibold"> {subheader[1]}</span>
              </p>
            </div>
            <div className="hidden sm:flex mt-6 justify-end pr-2">
              <button 
                className="hover:bg-orange-400 bg-orange-600 text-white text-sm p-2 b  rounded font-medium px-5"
                onClick={handleClick}
              >
                {cta}
              </button>
            </div>
          </div>
        </div>        
        <div className="w-full sm:min-w-[300px] flex flex-col items-center sm:items-start sm:pl-5">
          <div className="rounded-lg overflow-hidden m-1" style={container}>
            <Image src={image} alt="Photo of woman in supermarket" width={350} height={350} priority/>
          </div>
        </div>
      </div>
      <EmailModal isOpen={isOpen} onOpenChange={onOpenChange} utm={utm}/>
    </>

  )
}

Hero.displayName = 'Hero'

export default Hero

const container = {
  borderWidth: "0px",
  borderColor: "rgba(0,173,238,0.5)",
  borderRadius: "1.5rem",
  background: "linear-gradient(#fff, rgb(0 0 0 / 0.02))",
  boxShadow: "0px 0px 0px 1px var(--shadow-color), 0px 1px 1px -0.5px var(--shadow-color), 0px 3px 3px -1.5px var(--shadow-color), 0px 6px 6px -3px var(--shadow-color), 0px 12px 12px -6px var(--shadow-color), 0px 24px 24px -12px var(--shadow-color)",
  "--shadow-color": "rgb(0 0 0 / 0.06)"
}
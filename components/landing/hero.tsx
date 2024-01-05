// components/hero.tsx

import Image from 'next/image'
import {useDisclosure} from "@nextui-org/modal"

import EmailModal from '@/components/landing/email-modal'
import getVariations from '@/components/landing/variations'

interface UTMProps {
  utm?: string | undefined | null
}

const Hero: React.FC<UTMProps> = ({ utm }) => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    onOpen()
  }

  const { header, subheader, image, cta } = getVariations({ utm })

  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full flex justify-end sm:min-w-[475px] sm:max-w-[700px]">
          <div className="flex flex-col justify-center pb-5 px-2 sm:py-0 sm:pr-10 sm:w-4/5">
            <h1 className="text-center sm:text-left text-4xl font-semibold">
              {header}
            </h1>
            <p className="mt-5 text-center sm:text-left">
              {subheader[0]}
              <span className="font-semibold">{subheader[1]}</span>
            </p>
            <div className="hidden sm:flex mt-6 justify-end pr-2">
              <button 
                className="hover:bg-transparent bg-zinc-900 hover:text-zinc-900 text-white text-xs p-2 border border-zinc-900 rounded font-medium px-5"
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
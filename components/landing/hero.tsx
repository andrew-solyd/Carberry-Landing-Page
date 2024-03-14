// components/hero.tsx

import Image from 'next/image'
import {useDisclosure} from "@nextui-org/modal"
import { FaArrowRight } from "react-icons/fa6"

import { LandingPage }  from '@/components/landing/variations'

import { trackEvent } from '@/helpers/tracking'

interface HeroProps {
  variation: LandingPage;
}

const Hero: React.FC<HeroProps> = ({ variation  }) => {

	const { header, subheader, cta } = variation;
  const {isOpen, onOpen, onOpenChange} = useDisclosure()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    trackEvent('hero-cta-click').catch(console.error)
		event.preventDefault()
    onOpen()
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full flex justify-end sm:min-w-[475px] sm:max-w-[700px]">
          <div className="flex flex-col justify-center pb-5 sm:px-2 sm:py-0 sm:pr-10 sm:w-4/5">          
            <h1 className="sm:pr-10 text-balance text-center sm:text-left text-5xl font-extrabold sm:font-bold">
              {header}
            </h1>
            <div className="mx-5 sm:pr-10 sm:mx-0 text-lg text-balance mt-5 mb-10 sm:mb-0 text-center sm:text-left">
              <p>
                {subheader[0]}
                <span className="font-semibold"> {subheader[1]}</span>
              </p>
            </div>
          </div>
        </div>        
        <div className="w-full sm:min-w-[300px] flex flex-col items-center sm:items-start sm:pl-5">
          <div className="rounded-lg overflow-hidden m-1" style={container}>
            <Image src="/hero_0.webp" alt="Hero image" width={350} height={350} priority/>
          </div>
        </div>
      </div>
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
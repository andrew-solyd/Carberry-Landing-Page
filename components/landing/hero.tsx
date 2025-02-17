// components/hero.tsx

import Image from 'next/image'
import {useDisclosure} from "@nextui-org/modal"
import { FaArrowRight } from 'react-icons/fa'
import EmailModal from './email-modal'
import { LandingPage }  from '@/components/landing/variations'
import { trackEvent } from '@/helpers/tracking'

interface HeroProps {
  variation: LandingPage;
}

const Hero: React.FC<HeroProps> = ({ variation  }) => {

	const { header, subheader, cta, image, imageLocation } = variation
	const {isOpen, onOpen, onOpenChange} = useDisclosure()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    trackEvent('hero-cta-click').catch(console.error)
		event.preventDefault()
    onOpen()
  }

	// Function to render the hero image
  const renderHeroImage = () => (
    <div className="w-full sm:hidden flex justify-center"> {/* sm:hidden ensures it's only displayed on mobile */}
      <div className="rounded-lg overflow-hidden m-1">
        <Image src={image} alt="Hero image" width={350} height={350} priority />
      </div>
    </div>
  );

  return (
    <>
			{imageLocation === 'belowLogo' && renderHeroImage()}
      <div className="flex flex-col sm:flex-row">
        <div className="w-full flex justify-end sm:min-w-[600px] sm:max-w-[700px]">
          <div className="flex flex-col justify-center pb-5 sm:px-2 sm:py-0 sm:pr-5 sm:w-4/5">
            <h1 className="sm:pr-5 text-balance leading-tight text-center sm:text-left text-5xl font-extrabold sm:font-bold mb-2 sm:mb-0">
              {header}
            </h1>
						{imageLocation === 'belowHeading' && renderHeroImage()}
            <div className="mx-5 sm:pr-5 sm:mx-0 text-lg text-balance mt-5 mb-6 sm:mb-0 text-center sm:text-left">
              <p>
                {subheader[0]} <span className="font-semibold"> {subheader[1]}</span>
              </p>
							<div className="flex justify-center sm:justify-end mb-3 sm:mb-0 mt-10 sm:mt-8 sm:pr-2">
								<button className="flex flex-row items-center hover:bg-emerald-700 bg-emerald-600 text-white py-2 px-6 rounded-lg font-semibold" onClick={handleClick}>
									{cta} <FaArrowRight className="ml-2"/>
								</button>
            </div>
            </div>
          </div>
        </div>
				{imageLocation === 'belowCTA' && renderHeroImage()}
        <div className="hidden sm:block w-full sm:min-w-[300px] flex flex-col items-center sm:items-start sm:pl-5">
          <div className="rounded-lg overflow-hidden m-1">
            <Image src={image} alt="Hero image" width={350} height={350} priority/>
          </div>
        </div>
      </div>
			<EmailModal isOpen={isOpen} onOpenChange={onOpenChange} variation={variation} />
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
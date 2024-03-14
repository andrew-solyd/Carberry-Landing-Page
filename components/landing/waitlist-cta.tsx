// components/waitlist-cta.tsx

import {useDisclosure} from "@nextui-org/modal"
import EmailModal from './email-modal'
import { LandingPage }  from '@/components/landing/variations'

import { trackEvent } from '@/helpers/tracking'
interface CTAProps {
  variation: LandingPage
}

const WaitlistCTA: React.FC<CTAProps> = ({ variation }) => {

  const { bottomHeader, bottomParagraph, bottomCTA } = variation;
	const {isOpen, onOpen, onOpenChange} = useDisclosure()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		trackEvent('bottom-cta-click').catch(console.error)
    event.preventDefault()
    onOpen()
  }

  return (
    <>
      <div className="mx-5 flex flex-col items-center">
				<h2 className="text-balance text-lg sm:text-2xl text-center font-semibold mb-3">
					{bottomHeader}
				</h2>
					<p className="sm:w-[320px] sm:text-lg text-center mb-10 mx-5">
						{ bottomParagraph }
					</p>
				<button 
					className="hover:bg-orange-400 bg-orange-600 text-white px-10 py-2 rounded-lg font-semibold"
					onClick={handleClick}
				>
					{bottomCTA}
				</button>        
			</div>  
			<EmailModal isOpen={isOpen} onOpenChange={onOpenChange} variation={variation} />
    </>
  )
}

WaitlistCTA.displayName = 'AdopterButtonWithModal'

export default WaitlistCTA
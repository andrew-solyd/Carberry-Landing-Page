// components/waitlist-cta.tsx

import {useDisclosure} from "@nextui-org/modal"
import EmailModal from './email-modal'

interface CTAProps {
  utm?: number | undefined | null
	bottomHeader: string
  bottomParagraph: string
	bottomCTA: string
}

const WaitlistCTA: React.FC<CTAProps> = ({ utm, bottomHeader, bottomParagraph, bottomCTA }) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    onOpen()
  }

  return (
    <>
      <div className="mx-5 flex flex-col items-center">
				<h2 className="text-balance text-2xl text-center font-semibold mb-3">
					{bottomHeader}
				</h2>
					<p className="sm:w-[600px] text-lg text-center font-medium mb-10">
						{ bottomParagraph }
					</p>
				<button 
					className="hover:bg-orange-400 bg-orange-600 text-white px-10 py-2 rounded font-semibold"
					onClick={handleClick}
				>
					{bottomCTA}
				</button>        
			</div>  
			<EmailModal isOpen={isOpen} onOpenChange={onOpenChange} utm={utm} />
    </>
  )
}

WaitlistCTA.displayName = 'AdopterButtonWithModal'

export default WaitlistCTA
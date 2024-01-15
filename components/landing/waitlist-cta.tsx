// components/waitlist-cta.tsx

import {useDisclosure} from "@nextui-org/modal"
import EmailModal from './email-modal'

interface CTAProps {
  utm?: number | undefined | null
  bottomParagraph: string
}

const WaitlistCTA: React.FC<CTAProps> = ({ utm, bottomParagraph }) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    onOpen()
  }

  return (
    <>
      <div className="mx-8 flex flex-col items-center ">
        <p className="text-lg sm:w-[500px] text-center font-medium mb-10">
          { bottomParagraph }
        </p>
        <button 
          className="hover:bg-orange-400 bg-orange-600 text-white px-10 py-2 rounded font-semibold"
          onClick={handleClick}
        >
          Join our waitlist
        </button>        
      </div>  
      <EmailModal isOpen={isOpen} onOpenChange={onOpenChange} utm={utm} />
    </>
  )
}

WaitlistCTA.displayName = 'AdopterButtonWithModal'

export default WaitlistCTA
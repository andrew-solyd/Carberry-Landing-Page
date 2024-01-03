// components/waitlist-cta.tsx

import {useDisclosure} from "@nextui-org/modal"
import EmailModal from './email-modal'

interface UTMProps {
  utm?: string | undefined | null
}

const WaitlistCTA: React.FC<UTMProps> = ({ utm }) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    onOpen()
  }

  return (
    <>
      <div className="mx-5 flex flex-col items-center ">
          <button 
            className="bg-zinc-900 text-white border-transparent hover:bg-transparent hover:text-zinc-900 px-10 py-2 border border-zinc-900 rounded font-semibold"
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
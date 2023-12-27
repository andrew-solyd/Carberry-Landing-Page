// components/waitlist-cta.tsx

import {useDisclosure} from "@nextui-org/modal"
import EmailModal from './email-modal'

const WaitlistCTA = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    onOpen()
  }

  return (
    <>
      <div className="mx-5 flex flex-col items-center ">
          <button 
            className="bg-transparent hover:bg-zinc-900 hover:text-white text-m px-10 py-2 border border-zinc-900 hover:border-transparent rounded font-semibold"
            onClick={handleClick}
          >
            Join our waitlist
          </button>
        
      </div>  
      <EmailModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}

WaitlistCTA.displayName = 'AdopterButtonWithModal'

export default WaitlistCTA
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
        <p className="text-lg w-3/5 text-center font-semibold mb-10">
          Join the Cartberry community, where smart savings bloom naturally. Our intuitive AI gathers the freshest deals, then shapes your shopping around your family's wellness, dietary journeys, and nourishment needs.
        </p>
        <button 
          className="mt-5 hover:bg-orange-400 bg-orange-600 text-white px-10 py-2 rounded font-semibold"
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
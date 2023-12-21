// components/email-modal.tsx

import { useState } from 'react'
import { Modal, ModalContent } from "@nextui-org/modal"
import { addEmailToAirtable } from '../services/airtable'
import { sendWelcomeEmail } from '@/services/email'

interface EmailModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onOpenChange }) => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleEmailSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const addEmailToAirtableResult = await addEmailToAirtable(email)
      const sendWelcomeEmailResult = await sendWelcomeEmail(email)
      
      if (addEmailToAirtableResult.success && sendWelcomeEmailResult.success) {
        setIsSubmitted(true)
      }

    } catch (error) {
      console.error(error)
    }
  }

  const handleClose = () => {
    onOpenChange(false)
    setIsSubmitted(false) // Reset the state for the next time the modal is opened
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" className="mx-5 mb-20 bg-black text-white">
      <ModalContent>
        {(onClose) => (
          <div className="flex flex-col px-5 py-10 items-center">
            {isSubmitted ? (
                <>
                  <p>Thank you for your submission!</p>
                  <button onClick={handleClose} className="w-[150px] mt-4 bg-[rgb(156,163,175)] text-[rgb(0,0,23)] rounded-lg p-1">
                    Close
                  </button>
                </>
              ) : (
                <>
                  <h1 className="text-lg mb-2">
                    Coming soon
                  </h1>
                  <p className="text-sm text-center px-5">
                    Join our waitlist to be the first to know when Cartberry launches.
                  </p>
                  <div className="flex flex-row">              
                    <form onSubmit={handleEmailSubmit} className="w-[200px] flex flex-col items-center justify-center mt-4 text-sm">
                      <input
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-3 w-full bg-[rgb(0,0,23)] border border-white rounded-lg px-2 py-1"
                      />
                      <button type="submit" className="w-[150px] mt-4 bg-[rgb(156,163,175)] text-[rgb(0,0,23)] rounded-lg p-1">
                        Submit
                      </button>
                    </form>
                  </div>
                </>
              )}
          </div>
        )}
      </ModalContent>
    </Modal>
  )
}

export default EmailModal
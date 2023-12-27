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
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleEmailSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    setError(null)
    try {
      const addEmailToAirtableResult = await addEmailToAirtable(email)
      const sendWelcomeEmailResult = await sendWelcomeEmail(email)
      
      if (addEmailToAirtableResult.success && sendWelcomeEmailResult.success) {
        setIsSubmitted(true)
      }
    } catch (error: any) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    onOpenChange(false)
    setIsSubmitted(false) // Reset the state for the next time the modal is opened
    setError(null)
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" className="mx-5 mb-20 bg-black text-white">
      <ModalContent>
        {(onClose) => (
          <div className="flex flex-col px-5 py-10 items-center">
            {isSubmitted ? (
                <>
                  <p>Thank you for your support!</p>
                  <button onClick={handleClose} className="w-[150px] mt-4 bg-[rgb(156,163,175)] text-[rgb(0,0,23)] rounded-lg p-1">
                    Close
                  </button>
                </>
              ) : (
                <>
                  <h1 className="text-lg mb-2">
                    Coming Soon
                  </h1>
                  <p className="text-sm text-center px-5">
                    Join our waitlist to be notified when we launch
                  </p>
                  <div className="flex flex-row mb-3">              
                    <form onSubmit={handleEmailSubmit} className="w-[300px] flex flex-col items-center justify-center mt-4 text-sm">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-3 w-full bg-[rgb(0,0,23)] border border-[rgb(156,163,175)] rounded-lg px-2 py-1"
                      />
                      <button 
                        type="submit" 
                        disabled={isLoading} 
                        className="w-[200px] mt-5 bg-white text-[rgb(0,0,23)] rounded-lg p-1 hover:bg-[rgb(156,163,175)]"
                      >
                        {isLoading ? 'Adding email to list...' : 'Add to list'}
                      </button>
                    </form>
                    {error && <p className="mt-2 text-red-500">{error}</p>}
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
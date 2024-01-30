// components/email-modal.tsx

import { useState } from 'react'
import { Modal, ModalContent } from '@nextui-org/modal'
import { addEmailToAirtable } from '@/services/airtable'
import { sendWelcomeEmail } from '@/services/email'

interface EmailModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  utm?: number | undefined | null
}

const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onOpenChange, utm }) => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  const handleEmailSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    setError(null)
    if (!validateEmail(email)) {
      setError('Invalid email address')
      setIsLoading(false)
      return
    }
    try {
      const addEmailToAirtableResult = await addEmailToAirtable(email, utm || 0)
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
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} onClose={handleClose} placement="center" className="mx-5 mb-20 bg-zinc-900 text-white">
      <ModalContent>
        {() => (
          <div className="flex flex-col px-5 py-10 items-center">
            {isSubmitted ? (
                <>
                  <p>Thank you for signing up!</p>
                  <button onClick={handleClose} className="w-[150px] mt-4 bg-[rgb(156,163,175)] text-[rgb(0,0,23)] rounded-lg p-1">
                    Close
                  </button>
                </>
              ) : (
                <>
                  <h1 className="sm:w-[300px] text-xl text-center mb-2">
                    Every cook needs a provisioner, welcome to Cartberry!
                  </h1>
                  <p className="text-sm text-center px-5">
                     Save money, shop smart.
                  </p>
                  <div className="flex flex-col items-center mb-3 mx-1">              
                    <form onSubmit={handleEmailSubmit} className="sm:w-[300px] flex flex-col items-center justify-center mt-4 text-sm">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-3 w-full bg-zinc-900 border border-[rgb(156,163,175)] rounded-lg px-2 py-2"
                      />
                      {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
                      <button 
                        type="submit" 
                        disabled={isLoading} 
                        className="w-[200px] mt-5 bg-white text-[rgb(0,0,23)] rounded-lg p-2 hover:bg-[rgb(156,163,175)]"
                      >
                        {isLoading ? 'Adding email...' : `Join the Cartberry beta`}
                      </button>
                      {! error && <p className="w-[200px] mt-2 text-xs text-zinc-600 text-center ">Your privacy is paramount. We keep all data personal and confidential.</p>}
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
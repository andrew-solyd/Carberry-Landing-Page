// services/email.ts

"use server"

import { Resend } from 'resend'
import { CartberryWelcomeEmail } from '@/components/email/email-template'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendWelcomeEmail = async (email: string) => {
  try {
    const result = await resend.emails.send({
      from: 'Cartberry <welcome@cartberry.co>',
      to: [email],
      subject: 'Hello world.',
      text: 'You\'re now on our wait list.',      
      react: CartberryWelcomeEmail(),
    })
		console.log(result)
    return { success: true } 
  } catch (error) {
    console.error(error)
    return { success: false, error: error }
  }
}
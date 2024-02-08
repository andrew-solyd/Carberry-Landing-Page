// services/email.ts

"use server"

import { Resend } from 'resend'
import { CartberryWelcomeEmail } from '@/components/email/email-template'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendWelcomeEmail = async (email: string, memberNumber: number) => {
  try {
    const result = await resend.emails.send({
      from: 'Cartberry <welcome@cartberry.co>',
      to: [email],
      subject: 'Welcome to Cartberry, the new way to save money and cook delicious food.',
      text: 'Thank you for signing up. We\'re putting on the finishing touches and excited to have you try Cartberry soon!',      
      react: CartberryWelcomeEmail(memberNumber),
    })
    return { success: true } 
  } catch (error) {
    console.error(error)
    return { success: false, error: error }
  }
}
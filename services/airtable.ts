// services/airtable.ts

"use server"

import Airtable from 'airtable'

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE as string)

export const addEmailToAirtable = async (email: string, utm: number) => {
  try {
    await base('Waitlist').create({
      "utm": utm,
      "email": email,
      "timestamp": new Date().toISOString()
    })
    return { success: true } 
  } catch (error) {
    console.error(error)
    return { success: false, error: error }
  }
}
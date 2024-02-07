// services/airtable.ts

"use server"
import axios from 'axios';

export const addEmailToAirtable = async (email: string, utm: number) => {
  const airtableApiUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/Waitlist`;
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json',
    },
  };
  const data = {
    fields: {
      "utm": utm.toString(),
      "email": email,
      "timestamp": new Date().toISOString(),
    },
  };

  try {
    const response = await axios.post(airtableApiUrl, data, config);
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: error };
  }
}
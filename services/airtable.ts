// services/airtable.ts

"use server"

import axios from 'axios'

export const addEmailToAirtable = async (email: string, utm: number) => {
  const airtableApiUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/Waitlist`
	const airtableCountApiUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/Count/recSU4yq7X0Sj2tg0`
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json',
    },
  }

	// Increment and fetch the latest count from a 'Counter' table or mechanism
  let newCount = 0
  try {
    // This is a simplified example. You would need to implement the logic to increment and fetch the latest count.
    const counterResponse = await axios.get(airtableCountApiUrl, config)
    newCount = counterResponse.data.fields.Count + 1
		console.log(newCount)
    // Optionally, update the counter in Airtable or your tracking mechanism here
  } catch (error) {
    console.error('Error fetching/updating the counter:', error)
    return { success: false, error: error }
  }

  const data = {
    fields: {
      "utm": utm.toString(),
      "email": email,
      "timestamp": new Date().toISOString(),
    },
  }

  try {
    await axios.post(airtableApiUrl, data, config)
    return { success: true, entryNumber: newCount }
  } catch (error) {
    console.error(error)
    return { success: false, error: error }
  }
}
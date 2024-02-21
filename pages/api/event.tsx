import { NextApiRequest, NextApiResponse } from 'next'
import { addEvent } from '@/services/pirsch'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Extract the URL from the request body
    const { eventName, url, refferer } = req.body

    // Parse the URL to extract query parameters, if necessary= new URL(url)
    // Now you can access specific UTMs like queryParams.get('utm_source')
		const eventData = {
				event_name: eventName,
        url: url, // The URL path that was accessed
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress, // The IP address of the visitor
        user_agent: req.headers['user-agent'],
				referrer: refferer // The User-Agent of the visitor
    }

		await addEvent(eventData)

		res.status(200).json({ message: 'Hit added successfully' })

  } else {
    // Handle any non-POST requests as needed
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
export const trackHit = async () => {
		// Capture the full URL, including query parameters (UTMs, etc.)
		const url = window.location.href
		const referrer = document.referrer

		// Send the URL to the API route
		await fetch('/api/hit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ url, referrer }), // Send the URL in the request body
		})
	}

export const trackEvent = async (eventName: string) => {
	// Capture the full URL, including query parameters (UTMs, etc.)
	const url = window.location.href
	const referrer = document.referrer
	
	// Send the URL to the API route
	await fetch('/api/event', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ eventName, url, referrer }), // Send the URL in the request body
	})
}
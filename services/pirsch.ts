"use server"

import axios from 'axios'

type HitData = {
    url: string;
    ip: string | string[] | undefined;
    user_agent: string | undefined;
		referrer: string;
}

export const addHit = async (hitData: HitData) => {

		console.log(hitData)

		if (process.env.ENV != 'DEV') {
			console.log('posting to pirsch')
			try {
					await axios.post('https://api.pirsch.io/api/v1/hit', hitData, {
							headers: {
									'Authorization': `Bearer ${process.env.PIRSCH_SECRET}`
							}
					});
			} catch (error) {
					console.error('Error sending hit:', error);
			}
		}
}
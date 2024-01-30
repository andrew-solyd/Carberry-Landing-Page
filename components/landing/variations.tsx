// components/landing/variations.tsx

import { createClient } from "next-sanity"
import imageUrlBuilder from '@sanity/image-url'


const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
})

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

interface UTM {
  utm?: number | undefined | null
}

export interface LandingPage {
  utm?: string
  header: string
  subheader: string[]
  image: string
  cta: string
  propsHeader: string
	propsImages: string[]
  props: string[]
	bottomHeader: string
  bottomParagraph: string
	bottomCTA:string
  // ... include other properties as needed
}

const getVariations = async ({ utm }: UTM): Promise<LandingPage> => {
  const landingPages: LandingPage[] = await client.fetch(`*[_type == "landingPage"]`)
  
  // Default to UTM 0 if no UTM is provided
  const utmValue = utm === undefined || utm === null ? '0' : utm.toString()

  let matchedPage = landingPages.find((page: LandingPage) => page.utm === utmValue) || landingPages.find((page: LandingPage) => page.utm === '0')

    if (!matchedPage) {
    throw new Error('No matching page found');
  }

  let header = matchedPage.header ?? ''
  let subheader = matchedPage.subheader ?? []
  let image = urlFor(matchedPage.image).url() ?? '/hero.png'
  let cta = matchedPage.cta ?? ''
  let props = matchedPage.props ?? ''
	let propsImages = matchedPage.propsImages ? matchedPage.propsImages.map(img => urlFor(img).url()) : []
  let propsHeader = matchedPage.propsHeader ?? ''
	let bottomHeader = matchedPage.bottomHeader ?? ''
  let bottomParagraph = matchedPage.bottomParagraph ?? ''
	let bottomCTA = matchedPage.bottomCTA ?? ''

  return { header, subheader, image, cta, propsHeader, propsImages, props, bottomHeader, bottomParagraph, bottomCTA }
}

export default getVariations


 /*
  let header = `Meaningfully reduce your grocery expenses`  
  let subheader = [`Craft your perfect shopping list in a flash and watch the savings blossom — no coupons needed. `, `Meet Cartberry, your new AI companion for wise and wholesome grocery shopping.`]
  let image = `/hero.png`
  let cta = `Sign up for early access`
  let props = [`Connect your store loyalty account, your data stays private always`, `Our AI scans all prices, sales and deals crunching the data`, `You get a personal shopping list with maximum in-store savings`]
  let subheader = [`Create your perfect shopping list in seconds. Save 20% or more at checkout without coupons. `, `Introducing Cartberry, your AI co-pilot for savvy grocery shopping.`]
  header = `You've been looking for this`
  let header = `Dramatically increase money saved on groceries`
  const header_v1 = "Feeding a family shouldn't be this expensive"
  const header_v2 = "Stop overpaying for groceries"
  const subheader_v1 = "Save time and money on every shop — Cartberry finds you the best deals for healthy, organic foods at your go-to stores."
  const subheader_v2 = "Find the best organic deals in seconds. Get instant cash savings every time you shop. Cartberry — your key to affordable, healthy eating."
  subheader = [`Get your perfect shopping cart in seconds. Save at least 20% every time you check out. `, `Cartberry — your AI co-pilot for savvy grocery shopping.`]
  header = `Less stress, more time with family`
    subheader = [`Easily plan meals and get shopping lists optimized for value. `, `Cartberry — your AI co-pilot for nutritious and healthy meals on any budget.`]
    image = `/hero_1.png`
    cta = `Coming soon  —  join waitlist`
    props = [`You link your loyalty accounts and we work our magic`, `Get suggested meals for the week, tweak as needed`, `We scan prices and sales, building list with max savings`]
  */
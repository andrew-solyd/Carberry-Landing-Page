// components/landing/variations.tsx

interface VariationProps {
  utm?: string | undefined | null
}

interface VariationResult {
  header: string
  subheader: string[]
  image: string
  cta: string
  props: string[]
}

const getVariations = ({ utm }: VariationProps): VariationResult  => {
  let header = `Meaningfully reduce your grocery expenses`
  let subheader = [`Get your perfect shopping list in seconds. Save at least 20% every time you check out. `, `Introducing Cartberry, your AI co-pilot for savvy grocery shopping.`]
  let image = `/hero.png`
  let cta = `Be our early adopter`
  let props = [`Link your store loyalty account and let the magic begin`, `Our AI scans all prices, sales and deals available`, `You get a personal shopping list with max store savings`]

  if (utm === "1") {
    header = `Less stress, more time with family`
    subheader = [`Easily plan meals and get shopping lists optimized for value. `, `Cartberry — your AI co-pilot for nutritious and healthy meals on any budget.`]
    image = `/hero_1.png`
    cta = `Coming soon  —  join waitlist`
    props = [`You link your loyalty accounts and we work our magic`, `Get suggested meals for the week, tweak as needed`, `We scan prices and sales, building list with max savings`]
  } 

  return { header, subheader, image, cta, props }
}

export default getVariations


 /*
  header = `You've been looking for this`
  let header = `Dramatically increase money saved on groceries`
  const header_v1 = "Feeding a family shouldn't be this expensive"
  const header_v2 = "Stop overpaying for groceries"
  const subheader_v1 = "Save time and money on every shop — Cartberry finds you the best deals for healthy, organic foods at your go-to stores."
  const subheader_v2 = "Find the best organic deals in seconds. Get instant cash savings every time you shop. Cartberry — your key to affordable, healthy eating."
  subheader = [`Get your perfect shopping cart in seconds. Save at least 20% every time you check out. `, `Cartberry — your AI co-pilot for savvy grocery shopping.`]
  */
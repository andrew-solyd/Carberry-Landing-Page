
import {
  Html,  
  Head,
  Preview,
  Tailwind,
  Body,
  Container,
  Section,
  Img,
  Heading,  
  Text,
} from '@react-email/components'
import * as React from 'react'

export const CartberryWelcomeEmail = (memberNumber: number) => (
  <Html>
    <Head />
    <Preview>{`You're now on our wait list.`}</Preview>
    <Tailwind>
      <Body className="flex flex-row items-center font-sans" style={main}>
        <Container className="my-[40px] mx-auto p-[20px]" style={container}>
          <Section className="mt-[32px]">
            <a href="https://www.cartberry.co">
              <Img
                src={`https://www.cartberry.co/logo.png`}
                width="150"
                alt="Cartberry"
                className="my-0 mx-auto"
              />
            </a>
          </Section>
          <Heading className="text-xl text-center p-0 my-[30px] mx-0">
            You&apos;re member #{memberNumber} and you&apos;re in free for life.
          </Heading>
          <Text className="text-base mx-5">
            We cooked up Cartberry so that preparing healthy, delicious meals can be easy, fun, and economical. <b>Here&apos;s how it works:</b>
          </Text>
          <ul className="text-base font-semibold">
            <li>You choose your favorite grocery store</li>
            <li>Cartberry finds the best deals</li>
            <li>Cartberry generates recipes and comes up with ideas based on your preferences</li>
            <li>Cartberry makes you an optimized, organized list for quick and efficient food-hauls</li>
            <li>You slash your food expenses significantly and never shop the same way again</li>
          </ul>
          
          <Text className="text-base mx-5">
            We&apos;re putting on the finishing touches and you&apos;ll be the first to know when Cartberry is ready for a spin.<br /><br />
            Stay Hungry,<br /><br />
            Team Cartberry<br />
            <a href="https://www.cartberry.co" className="text-current text-sm no-underline ">cartberry.co</a>
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html> 
)

export default CartberryWelcomeEmail

const main = {
  backgroundColor: "rgb(235, 245, 255)",
	color: "rgba(0, 0, 21, 0.85)4"
}

const container = {  
  borderWidth: "0px",
  borderColor: "rgba(0,173,238,0.5)",
  paddingLeft: "15px",
  paddingRight: "15px",
  borderRadius: "1.5rem",
  background: "linear-gradient(#fff, rgb(0 0 0 / 0.02))",
  boxShadow: "0px 0px 0px 1px var(--shadow-color), 0px 1px 1px -0.5px var(--shadow-color), 0px 3px 3px -1.5px var(--shadow-color), 0px 6px 6px -3px var(--shadow-color), 0px 12px 12px -6px var(--shadow-color), 0px 24px 24px -12px var(--shadow-color)",
  "--shadow-color": "rgb(0 0 0 / 0.06)"
}
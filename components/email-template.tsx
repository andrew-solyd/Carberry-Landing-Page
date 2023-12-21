
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

export const CartberryWelcomeEmail = () => (
  <Html>
    <Head />
    <Preview>You're now on our wait list.</Preview>
    <Tailwind>
      <Body className="flex flex-row items-center font-sans" style={main}>
        <Container className="my-[40px] mx-auto p-[20px]" style={container}>
          <Section className="mt-[32px]">
            <Img
              src={`https://www.cartberry.co/logo.svg`}
              width="100"
              alt="Cartberry"
              className="my-0 mx-auto"
            />
          </Section>
          <Heading className="text-black text-[24px] font-medium text-center p-0 my-[30px] mx-0">
            Welcome to Cartberry!
          </Heading>
          <Text className="text-black text-[14px] text-center">
            Thank you, you are now on our mailing list.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html> 
)

export default CartberryWelcomeEmail

const main = {
  backgroundColor: "rgb(235, 245, 255)"
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
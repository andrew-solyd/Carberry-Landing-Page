"use client"

import TypeIt from "typeit-react"

const TypedText = () => {
  return (

    <div className="text-sm sm:text-lg lg:text-2xl">
      <TypeIt       
        getBeforeInit={(instance) => {
          instance.type("I am a mother. We are a family of 4, living in Brooklyn, two small children. We need to eat healthy, all organic, no processed foods. Money is tight").pause(1000).delete(14).pause(750).type("We're on a budget.").options({ 
            afterComplete: () => {
              instance.destroy()
            }
          });
          return instance        
        }}
      />
    </div>

  )
}

TypedText.displayName = 'TypedText'

export default TypedText


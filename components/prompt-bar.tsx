'use client'

import { useState } from 'react'
import { FiCornerDownLeft } from 'react-icons/fi'
import { FiArrowUpRight } from 'react-icons/fi'

const PromptBar = () => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle the submit action here
    console.log(inputValue)
  }

  const buttonLabels = ['Just the basics', 'Vegetarian meal plan', '$50 week', 'Kid dinner ideas'];

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center p-2 bg-[rgb(0,0,23)] text-white rounded-lg text-xs mx-6 shadow-lg">
        <input
          type="text"
          placeholder="A taco tuesday for five"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="px-2 flex-grow outline-none bg-[rgb(0,0,23)]"
        />
        <button type="submit" className="ml-2 bg-[rgb(156,163,175)] text-[rgb(0,0,23)] rounded-full p-1">
          <FiCornerDownLeft size={14} />
        </button>
      </form>
      <div className="flex justify-center items-center flex-wrap pt-2">
        {buttonLabels.map(label => (
          <button 
            key={label}
            onClick={() => setInputValue(label)}
            className="my-1 mx-2 text-sm rounded-lg border border-[rgb(0,0,23,0.2)] p-1.5 text-xs flex flex-row space-x-2 whitespace-nowrap"
          >
            {label} <FiArrowUpRight size={14} className="" />
          </button>
        ))}
      </div>
    </div>
  )
}

PromptBar.displayName = 'PromptBar'

export default PromptBar
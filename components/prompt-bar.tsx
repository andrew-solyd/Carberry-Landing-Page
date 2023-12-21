'use client'

import { useState } from 'react'
import { useDisclosure } from "@nextui-org/modal"

import { FiCornerDownLeft, FiArrowUpRight } from 'react-icons/fi'

import EmailModal from './email-modal'

const PromptBar = () => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure()

  const [inputValue, setInputValue] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onOpen()
  }

  const buttonLabels = ['Just the basics', 'Vegetarian meal plan', '$50 week', 'Kid dinner ideas']

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl text-center mb-3">
            Try it out
        </h1>
        <form onSubmit={handleSubmit} className="flex p-2 bg-[rgb(0,0,23)] text-white rounded-lg text-xs mx-6 shadow-lg w-full max-w-[320px] sm:max-w-[520px]">
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
        <div className="flex justify-center items-center flex-wrap pt-2 w-full max-w-[320px] sm:max-w-[530px]">
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
      <EmailModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}

PromptBar.displayName = 'PromptBar'

export default PromptBar
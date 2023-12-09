"use client"

import React, { useState } from 'react'

import { FaArrowAltCircleDown } from "react-icons/fa"

import Header from '@/components/header'
import Hero from '@/components/hero'
import ValueProp from '@/components/value-prop'
import StoreLogos from '@/components/stores'
import Compare from '@/components/compare'
import PromptBar from '@/components/prompt-bar'
import Footer from '@/components/footer'

export default function Home() {

  const [isCompleted, setIsCompleted] = useState(false);

  const handleIsCompleted = (value : boolean) => {
    setIsCompleted(value);
  }

  return (
    <main className="flex flex-col items-center">
      <div className="mt-5 px-7 w-full">
        <Header/>
      </div>
      <div className="flex flex-col items-center mt-5 sm:mt-10 px-10 w-full">
        <Hero/>
      </div>
      <div className="mt-10 mb-10 w-full">
        <div className="sm:mt-10"><ValueProp/></div>        
      </div>
      <div className="mb-10 w-full">
        <div className="sm:mt-10"><StoreLogos/></div>        
      </div>
      <div className="mb-10 w-full">
        <div id="see-difference" className="sm:mt-10"><Compare isCompleted={handleIsCompleted} /></div>
      </div>
      <div className={`mb-10 w-full transition-opacity delay-1000 duration-2000 items-center justify-center ${isCompleted ? 'opacity-100 scale-100' : 'opacity-0 scale-0 absolute'}`}>
        <div className="flex flex-row justify-center">
          <FaArrowAltCircleDown size={35}/>
        </div>
      </div>
      <div className={`mb-10 w-full transition-opacity delay-2000 duration-2000 ${isCompleted ? 'opacity-100 scale-100' : 'opacity-0 scale-0 absolute'}`}>
        <PromptBar/>
      </div>
      <div className="mt-10 w-full">
        <Footer/>
      </div>
    </main>
  )
}

// pages/demo.tsx

import '@/app/globals.css'

import React, { useEffect, useState } from 'react';

import { HiOutlineMail } from "react-icons/hi"
import { PiKeyReturnFill } from "react-icons/pi"
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './demo.css'

import Header from '@/components/header'
import Footer from '@/components/footer'
import CartTable from '@/components/table'

const Suggestion = ({ text }: { text: string }) => (
  <div className="text-slate-800 min-h-16 mt-2 p-2 text-sm rounded-md border border-slate-800 hover:bg-slate-800 hover:text-gray-300" style={{ width: '200px'}}>
    <span className="text-sm font-light" >{text}</span>
  </div>
);

const suggestions = [
  "This is suggestion 1", 
  "This is suggestion 2",
  "This is a third suggestion"
]

export default function Demo() {

  const [loadedSuggestions, setLoadedSuggestions] = useState<string[]>([]);

  useEffect(() => {
    suggestions.slice(0, 3).forEach((suggestion, index) => {
      setTimeout(() => {
        setLoadedSuggestions(prev => [...prev, suggestion]);
      }, index * 500); // Change delay as needed
    });
  }, []);

  return (
        <div className="flex flex-col min-h-screen justify-between">

          <main className="flex flex-col items-center">
            <div className="px-7 mt-2 w-full">
              <Header/>
            </div>
            <div className="flex flex-col justify-between px-7 py-4 border border-slate-300 rounded-md" style={{ width: '590px', height: '490px', ...container}}>
              <div id="topRow" className="flex flex-row mb-3 space-x-3 justify-between mb-4">
                <div id="leftCol">
                  <div className="flex flex-row justify-between items-end mb-1">
                    <span className="text-slate-800 text-lg font-semibold">Shopping List</span>
                    <span className="text-slate-400 text-xs font-extralight">11 items</span>
                  </div>
                  <CartTable tableType='regular'/>
                </div>
                <div id="rightCol" className="flex flex-col justify-between">
                  
                    <div className="pt-6">
                      <TransitionGroup>
                        {loadedSuggestions.map((suggestion, index) => (
                          <CSSTransition key={index} timeout={500} classNames="item">
                            <Suggestion text={suggestion}/>
                          </CSSTransition>
                        
                        ))}
                      </TransitionGroup>
                    </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 text-md font-medium">Total: $24.99</span>
                    <span className="text-slate-600 text-2xl font-medium mr-4"><HiOutlineMail /></span>
                  </div>
                </div>
              </div>
              <div id="bottomRow" className="bg-slate-800 p-4 w-full h-full rounded-md flex justify-between mb-2">
                <span className="text-gray-300 text-sm font-light">My prompt input in here</span>
                <div className="flex items-end">
                  <span className="text-gray-300 text-2xl"><PiKeyReturnFill /></span>
                </div>
              </div>
            </div>
          </main>        
          <div className="mt-10 w-full">
            <Footer/>
          </div>
        </div>
  )
}

const container = {
  borderWidth: "0px",
  borderColor: "rgba(0,173,238,0.5)",
  borderRadius: "1.5rem",
  background: "linear-gradient(#fff, rgb(0 0 0 / 0.02))",
  boxShadow: "0px 0px 0px 1px var(--shadow-color), 0px 1px 1px -0.5px var(--shadow-color), 0px 3px 3px -1.5px var(--shadow-color), 0px 6px 6px -3px var(--shadow-color), 0px 12px 12px -6px var(--shadow-color), 0px 24px 24px -12px var(--shadow-color)",
  "--shadow-color": "rgb(0 0 0 / 0.06)"
}
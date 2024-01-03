// pages/demo.tsx

import '@/app/globals.css'

import React, { useEffect, useState } from 'react'
import {useDisclosure} from '@nextui-org/modal'

import { HiOutlineMail } from 'react-icons/hi'
import { PiKeyReturnFill } from 'react-icons/pi'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './demo.css'

import Header from '@/components/header'
import Footer from '@/components/footer'
import CartTable from '@/components/table'
import CatTableModal from '@/components/table-modal'

const Suggestion = ({ text }: { text: string }) => (
  <div className="hover:bg-slate-800 hover:bg-opacity-10 hover:text-slate-800 min-h-16 mt-2 p-3 text-sm rounded-xl bg-slate-800 bg-opacity-90 text-gray-300" style={{ width: '200px'}}>
    <span className="text-sm font-light" >{text}</span>
  </div>
)
const suggestions = [
  "This is suggestion 1", 
  "This is suggestion 2",
  "This is a third suggestion"
]

const regularShopItems = [
    { image: '/regular_shop/milk.jpg', item: 'Organic Valley 2% Milk', quantity: '1 gallon', cost: '$7.69', category: `Dairy & Eggs` },
    { image: '/regular_shop/eggs.jpg', item: 'Organic Valley, Pasture Raised Eggs', quantity: '12 count', cost: '$7.29', category: `Dairy & Eggs` },    
    { image: '/regular_shop/bread.jpg', item: 'Daves Killer Organic 21 Grain Bread', quantity: '27 ounces', cost: '$6.79', category: `
Breads, Rolls & Bakery` },
    { image: '/regular_shop/chicken.jpg', item: 'Organic Boneless Chicken Thighs', quantity: '3 pounds', cost: '$25.47', category: `Meat` },
    { image: '/regular_shop/beef.jpg', item: 'Organic Beef Stew Meat', quantity: '2 pounds', cost: '$27.98', category: `Meat` },
    { image: '/regular_shop/blackberries.jpg', item: 'Fresh Organic Blackberries', quantity: '24 ounces', cost: '$13.98', category: `Produce` },
    { image: '/regular_shop/strawberries.jpg', item: 'Frozen Organic Strawberries', quantity: '20 ounces', cost: '$7.98', category: `Frozen Food` },
    { image: '/regular_shop/apples.jpg', item: 'Organic Honeycrisp Apples', quantity: '3 pounds', cost: '$11.97', category: `Produce` },
    { image: '/regular_shop/carrots.jpg', item: 'Organic Carrot Sticks', quantity: '12 ounces', cost: '$2.49', category: `Produce` },
    { image: '/regular_shop/broccoli.jpg', item: 'Fresh Organic Broccoli Florets', quantity: '32 ounces', cost: '$11.44', category: `Produce` },
  ]
const total = regularShopItems.reduce((acc, item) => {
  const cost = Number(item.cost.replace('$', ''))
  return acc + cost
}, 0) 
const itemsCount = regularShopItems.length

export default function Demo() {

  const [loadedSuggestions, setLoadedSuggestions] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const {isOpen, onOpen, onOpenChange} = useDisclosure()

  useEffect(() => {
    suggestions.slice(0, 3).forEach((suggestion, index) => {
      setTimeout(() => {
        setLoadedSuggestions(prev => [...prev, suggestion])
      }, index * 500) // Change delay as needed
    })
  }, [])

  const handleExpandClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    onOpen()
  }

  return (
    <>
      <div className="flex flex-col min-h-screen justify-between">
        <main className="flex flex-col items-center">
          <div className="px-7 mt-2 w-full">
            <Header/>
          </div>
          <div className="flex flex-col justify-between px-7 py-4 bg-blue-50" style={{ width: '590px', height: '490px', ...container}}>
            <div id="topRow" className="flex flex-row mb-3 space-x-3 justify-between mb-4">
              <div id="leftCol">
                <div className="flex flex-row justify-between items-end mb-2">
                  <span className="text-slate-800 text-lg font-semibold">Shopping List</span>
                  <span className="text-slate-400 text-xs font-extralight">{itemsCount} items</span>
                </div>
                <CartTable data= {regularShopItems} loading={loading}/>
              </div>
              <div id="rightCol" className="flex flex-col justify-between">
                
                  <div className="pt-8">
                    <TransitionGroup>
                      {loadedSuggestions.map((suggestion, index) => (
                        <CSSTransition key={index} timeout={500} classNames="item">
                          <Suggestion text={suggestion}/>
                        </CSSTransition>                    
                      ))}
                    </TransitionGroup>
                  </div>
                
                <div className="flex justify-between">
                  <span className="text-slate-600 text-md font-medium">Total: ${total.toFixed(2)}</span>
                  <span className="text-slate-600 text-2xl font-medium mr-4"><HiOutlineMail /></span>
                </div>
              </div>
            </div>
            <div id="bottomRow" className="bg-slate-800 bg-opacity-90 p-4 w-full h-full rounded-xl flex justify-between mb-2">
              <span className="text-gray-300 text-sm font-light">My prompt input in here</span>
              <div className="flex items-end">
                <span className="text-gray-300 text-2xl"><PiKeyReturnFill /></span>
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-5">
            <button 
              className="mt-5 rounded text-sm font-light"
              onClick={() => setLoading(!loading)}
            >
              Load Cart
            </button>
            <button 
              className="mt-5 rounded text-sm font-light"
              onClick={handleExpandClick}
            >
              Expand
            </button>
          </div>
        </main>        
        <div className="mt-10 w-full">
          <Footer/>
        </div>
      </div>
      <CatTableModal isOpen={isOpen} onOpenChange={onOpenChange} data={regularShopItems}/>
    </>
  )
}

const container = {
  borderWidth: "0px",
  borderRadius: "1.5rem",
  boxShadow: "0px 0px 0px 1px var(--shadow-color), 0px 1px 1px -0.5px var(--shadow-color), 0px 3px 3px -1.5px var(--shadow-color), 0px 6px 6px -3px var(--shadow-color), 0px 12px 12px -6px var(--shadow-color), 0px 24px 24px -12px var(--shadow-color)",
  "--shadow-color": "rgb(0 0 0 / 0.06)"
}
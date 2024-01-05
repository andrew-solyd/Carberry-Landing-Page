// pages/mvp.tsx

import '@/app/globals.css'

import React, { useState } from 'react'
import {useDisclosure} from '@nextui-org/modal'

import { HiOutlineMail } from 'react-icons/hi'
import './mvp.css'

import Header from '@/components/universal/header'
import Footer from '@/components/universal/footer'
import ShoppingList from '@/components/mvp/list'
import Loader from '@/components/mvp/loader'
import AssistantResponse from '@/components/mvp/response'
import ShoppingListModal from '@/components/mvp/list-modal'
import PromptBar from '@/components/mvp/prompt'
import SuggestionsList from '@/components/mvp/suggestions'

import { regularShopItems } from '@/components/mvp/data'

export default function Demo() {

  const [loading, setLoading] = useState(false)
  const [responseVisible, setResponseVisible] = useState(false)
  const {isOpen, onOpen, onOpenChange} = useDisclosure()

  const handleExpandClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    onOpen()
  }

  const total = regularShopItems.reduce((acc, item) => {
    const cost = Number(item.cost.replace('$', ''))
    return acc + cost
  }, 0)

  const itemsCount = regularShopItems.length

  return (
    <>
      <div className="flex flex-col min-h-screen justify-between">
        <main className="flex flex-col items-center">
          <div className="px-7 mt-2 w-full">
            <Header/>
          </div>
          <div className="container flex flex-col justify-between px-7 py-4 bg-blue-50" style={{ width: '590px', height: '490px' }}>
            <div id="topRow" className="flex flex-row mb-3 space-x-3 justify-between mb-4">
              <div id="leftCol">
                <div className="flex flex-row justify-between items-end mb-2">
                  <span className="text-slate-800 text-lg font-semibold">Shopping List</span>
                  <span className="text-slate-400 text-xs font-extralight">{itemsCount} items</span>
                </div>
                <div className="justify-center">
                    {!loading && !responseVisible &&  (
                      <ShoppingList data={regularShopItems} />
                    )}
                    {loading && (
                      <Loader />
                    )}
                    {responseVisible && (
                      <AssistantResponse onClose={() => setResponseVisible(false)}/>
                    )}      
                </div>
              </div>
              <div id="rightCol" className="flex flex-col justify-between">                
                <SuggestionsList />            
                <div className="flex justify-between">
                  <span className="text-slate-600 text-md font-medium">Total: ${total.toFixed(2)}</span>
                  <span className="text-slate-600 text-2xl font-medium mr-4"><HiOutlineMail /></span>
                </div>
              </div>
            </div>
            <PromptBar />
          </div>
          <div className="flex flex-row space-x-5">
            <button className="mt-5 rounded text-sm font-light" onClick={() => {setLoading(!loading); setResponseVisible(false)}}>
              Load Cart
            </button>
            <button className="mt-5 rounded text-sm font-light" onClick={handleExpandClick}>
              Expand
            </button>
            <button className="mt-5 rounded text-sm font-light" onClick={() => {setResponseVisible(!responseVisible); setLoading(false)}}>
              Response
            </button>
          </div>
        </main>        
        <div className="mt-10 w-full">
          <Footer/>
        </div>
      </div>
      <ShoppingListModal isOpen={isOpen} onOpenChange={onOpenChange} data={regularShopItems}/>
    </>
  )
}
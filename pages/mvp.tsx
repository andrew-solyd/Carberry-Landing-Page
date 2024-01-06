// pages/mvp.tsx

import '@/app/globals.css'

import React, { useState } from 'react'
import {useDisclosure} from '@nextui-org/modal'
import { IoShareOutline } from "react-icons/io5"

import '@/pages/mvp.css'

import Header from '@/components/universal/header'
import Footer from '@/components/universal/footer'
import ShoppingList from '@/components/mvp/list'
import Loader from '@/components/mvp/loader'
import AssistantResponse from '@/components/mvp/response'
import ShoppingListModal from '@/components/mvp/list-modal'
import Prompts from '@/components/mvp/prompts'

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

          <div className="w-auto container flex flex-col px-7 py-4 bg-blue-50">
            <div id="topRow" className="flex flex-row mb-3 space-x-5 justify-center">
              <div id="leftCol">
                <div className="flex flex-row justify-between items-center">
                  <span className="text-slate-600 text-lg font-semibold ml-1">Shopping List</span>
                  
                </div>
                <div className="flex justify-between items-start mb-1">
                  <span className="text-slate-400 text-xs font-extralight ml-1">{itemsCount} items</span>
                  <div className="flex items-end">
                    <span className="text-slate-600 text-md font-medium mr-2">Total: ${total.toFixed(2)}</span>
                    <button className="text-slate-600 text-xl mr-1 mb-1 hover:text-slate-900" onClick={handleExpandClick}><IoShareOutline /></button>
                  </div>
                </div>
                <div className="justify-center">
                  <div className="relative w-[320px] h-[400px] flex flex-col bg-white rounded-xl overflow-y-auto px-3 pt-1 border border-slate-300">
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
              </div>
              <div id="rightCol" className="w-[220px] flex flex-col">                
                <Prompts />                                      
              </div>
            </div>
          </div>

          <div className="flex flex-row space-x-5">
            <button className="mt-5 rounded text-sm font-light" onClick={() => {setLoading(!loading); setResponseVisible(false)}}>
              Load Cart
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
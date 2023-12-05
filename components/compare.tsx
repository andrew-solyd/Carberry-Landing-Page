'use client'

import { useState } from 'react'
import Image from 'next/image'
import CountUp from 'react-countup'
import CartTable from '@/components/table'

const Compare = () => {

  const standard_price = 123.08
  const cartberry_price = 74.95

  const [activeTab, setActiveTab] = useState('cartberry')
  const [buttonText, setButtonText] = useState('Shop without Cartberry')
  const [viewState, setViewState] = useState('before')
  const [prices, setPrices]= useState([standard_price, cartberry_price])

  const handleClick = () => {
    if (viewState === 'before') {
      setViewState('after_regular')
    } else if (viewState === 'after_regular') {
      setViewState('after_cartberry')
    } else {
      setViewState('before')
    }
  }

  const handleToggle = () => {
    if (activeTab === 'cartberry') {
      setActiveTab('regular')
      setButtonText('Shop with Cartberry')
      setPrices([cartberry_price, standard_price])
    } else {
      setActiveTab('cartberry')
      setButtonText('Shop without Cartberry')
      setPrices([standard_price, cartberry_price])
    }
  }

  return (
    <div className="mx-5 flex flex-col items-center">
      <div className={`max-w-[420px]`}>
        <h1 className="text-3xl text-center">
          See the difference
        </h1>
        <p className="mt-4 text-center mb-5 mx-5 sm:mx-10">
          Milk, eggs, bread. We usually sort of know how much it will cost. But even with a small shop, the savings are there. Try it out! 
        </p>
      </div>
      <h1 className={`text-xl text-center transition-opacity duration-500 my-2 ${viewState == 'before' ? 'opacity-100 scale-100' : 'opacity-0 scale-0 absolute' }`}>
            Ready for checkout?
      </h1>
      <h1 className={`text-xl text-center transition-opacity delay-500 duration-500 my-2 ${viewState == 'after_regular' ? 'opacity-100 scale-100' : 'opacity-0 scale-0 absolute'}`}>
         Total price: $
        {viewState == 'after_regular' && <CountUp end={standard_price} decimals={2} duration={2.5} />}
      </h1>
      <h1 className={`text-xl text-center transition-opacity my-2 ${viewState == 'after_cartberry' ? 'opacity-100 scale-100' : 'opacity-0 scale-0 absolute'}`}>
        Total price: $
        {viewState == 'after_cartberry' && <CountUp start={prices[0]} end={prices[1]} decimals={2} duration={1.5} />}
      </h1>
      <span className={`text-xs w-[320px] text-center my-1 transition-opacity duration-2000 ${(viewState === 'after_regular' || viewState === 'after_cartberry') ? 'opacity-100' : 'opacity-0'}`}>Wholefoods Brooklyn, NY. Store prices 12/05/23.</span>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div id ="before" className={`w-full sm:min-w-[320px] flex flex-col items-center sm:items-start sm:pl-5 transition-opacity duration-1000 ${viewState == 'before' ? 'opacity-100 scale-100' : 'opacity-0 scale-0 absolute'}`}>
            <div className="rounded-lg overflow-hidden m-1">
              <Image src="/list.png" alt="Shopping list" width={320} height={320}/>
            </div>
          </div>
          <div id="after_regular" className={`flex flex-col items-center m-1 transition-opacity duration-2000 ${viewState == 'after_regular' ? 'opacity-100 scale-100' : 'opacity-0 scale-0 absolute'}`}>
            <CartTable tableType={'regular'}/>
          </div>
          <div id="after_cartberry" className={`flex flex-col items-center m-1 transition-opacity duration-1000 ${viewState == 'after_cartberry' ? 'opacity-100 scale-100' : 'opacity-0 scale-0 absolute'}`}>
            <CartTable tableType={activeTab}/>
          </div>
        </div>        
      </div>
      <button onClick={handleClick} className={`w-[320px] mt-2 bg-transparent hover:bg-zinc-900 hover:text-white text-s p-2 border border-zinc-900 hover:border-transparent rounded transition-opacity duration-750 ${viewState == 'before' ? 'opacity-100 scale-100' : 'opacity-0 scale-0 absolute'}`}>
        Shop this list
      </button>
      <button onClick={handleClick} className={`w-[320px] mt-2 bg-transparent hover:bg-zinc-900 hover:text-white text-s p-2 border border-zinc-900 hover:border-transparent rounded transition-opacity delay-500 duration-1000 ${viewState == 'after_regular' ? 'opacity-100 scale-100' : 'opacity-0 scale-0 absolute'}`}>
        Shop with Cartberry
      </button>
      <button onClick={handleToggle} className={`w-[320px] mt-2 bg-transparent hover:bg-zinc-900 hover:text-white text-s p-2 border border-zinc-900 hover:border-transparent rounded transition-opacity duration-1000 ${viewState == 'after_cartberry' ? 'opacity-100 scale-100' : 'opacity-0 scale-0 absolute'}`}>
        {buttonText}
      </button>
    </div>
    
  )
}

Compare.displayName = 'Compare'

export default Compare
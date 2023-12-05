'use client'

import { useState } from 'react'
import Image from 'next/image'
import CountUp from 'react-countup'
import CartTable from '@/components/table'

const Compare = () => {

  const [viewState, setViewState] = useState('before')

  const handleClick = () => {
    if (viewState === 'before') {
      setViewState('after_regular')
    } else if (viewState === 'after_regular') {
      setViewState('after_cartberry')
    } else {
      setViewState('before')
    }
  }
  
  const standard_price = 123.08
  const cartberry_price = 74.95

  return (
    <div className="mx-5 flex flex-col items-center">
      <div className={`max-w-[550px]`}>
        <h1 className="text-3xl text-center">
          See the difference
        </h1>
        <p className="mt-4 text-center mb-10 mx-5 sm:mx-10">
          Written, typed or texted. Going into the store with a shopping list is a good start. But checkout is still a surprise.
        </p>
      </div>
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
            <CartTable tableType={'cartberry'}/>
          </div>
        </div>        
      </div>  
      <h1 className={`text-xl text-center transition-opacity duration-500 my-2 ${viewState == 'before' ? 'opacity-100 scale-100' : 'opacity-0 scale-0 absolute' }`}>
            Total price? Not sure.
      </h1>
      <h1 className={`text-xl text-center transition-opacity delay-500 duration-500 my-2 ${viewState == 'after_regular' ? 'opacity-100 scale-100' : 'opacity-0 scale-0 absolute'}`}>
         Total price: $
        {viewState == 'after_regular' && <CountUp end={standard_price} decimals={2} duration={3} />}
      </h1>
      <h1 className={`text-xl text-center transition-opacity my-2 ${viewState == 'after_cartberry' ? 'opacity-100 scale-100' : 'opacity-0 scale-0 absolute'}`}>
        Total price: $
        {viewState == 'after_cartberry' && <CountUp start={standard_price} end={cartberry_price} decimals={2} duration={3} />}
      </h1>
      <button onClick={handleClick} className={`w-[320px] mt-2 bg-transparent hover:bg-zinc-900 hover:text-white text-s p-2 border border-zinc-900 hover:border-transparent rounded transition-opacity duration-750 ${viewState == 'before' ? 'opacity-100 scale-100' : 'opacity-0 scale-0 absolute'}`}>
        Shop this list
      </button>
      <button onClick={handleClick} className={`w-[320px] mt-2 bg-transparent hover:bg-zinc-900 hover:text-white text-s p-2 border border-zinc-900 hover:border-transparent rounded transition-opacity delay-2000 duration-1000 ${viewState == 'after_regular' ? 'opacity-100 scale-100' : 'opacity-0 scale-0 absolute'}`}>
        Optimize this cart
      </button>
      <button onClick={handleClick} className={`w-[320px] mt-2 bg-transparent hover:bg-zinc-900 hover:text-white text-s p-2 border border-zinc-900 hover:border-transparent rounded transition-opacity delay-1000 duration-750 ${viewState == 'after_cartberry' ? 'opacity-100 scale-100' : 'opacity-0 scale-0 absolute'} `}>
        Start over
      </button>
    </div>
    
  )
}

Compare.displayName = 'Compare'

export default Compare
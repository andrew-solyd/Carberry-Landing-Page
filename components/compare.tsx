'use client'

import { useState } from 'react'
import CartTable from '@/components/table'

const Compare = () => {

  const [activeTab, setActiveTab] = useState('regular')

  return (
    <div className="mx-5 flex flex-col items-center">
      <div className="max-w-[650px]">
        <h1 className="text-3xl text-center">
          See the difference
        </h1>
        <p className="mt-4 text-center mb-10 mx-5 sm:mx-10">
          Written, typed or texted. Going into the store with a shopping list is a good start. But checkout is still a surprise.
        </p>
      </div>
      <div className="">
        <p className="text-xs mt-4 text-center mb-1 mx-5 sm:mx-10">
            Wholefoods. Brooklyn, NY. Prices as of 11/28/23.
        </p>
        <div className="w-[300px] flex text-sm justify-center border border-[rgb(0,0,23)] space-x-4 rounded-lg py-2 px-2  my-2 bg-white">
          <button 
            onClick={() => setActiveTab('regular')}
            className={`w-[125px] py-2 px-3 rounded-md ${activeTab === 'regular' ? 'bg-[rgb(0,0,23)] text-[rgb(235,245,255)]' : 'bg-white text-[rgb(0,0,23)]'}`}
          >
            Regular shop
          </button>
          <button 
            onClick={() => setActiveTab('cartberry')}
            className={`w-[125px] py-2 px-3 rounded-md ${activeTab === 'cartberry' ? 'bg-[rgb(0,0,23)] text-[rgb(235,245,255)]' : 'bg-white text-[rgb(0,0,23)]'}`}
          >
            Cartberry shop
          </button>
        </div>
        <CartTable tableType={activeTab}/>
      </div>
      <div className="max-w-[650px] mt-5">
        <h1 className="text-3xl text-center">
          Same nutrition, same quality, 40% less cost
        </h1>
        <p className="mt-4 text-center mb-10 mx-5 sm:mx-10">
          Our AI sifts through thousands of sale items, matching products, prices, and promotions to get you the perfect cart.
        </p>
      </div>
    </div>
    
  )
}

Compare.displayName = 'Compare'

export default Compare
"use client"

import { useState } from 'react'
import CartTable from '@/components/Table_v2'

const Compare = () => {

  const [activeTab, setActiveTab] = useState('regular')

  return (
    <div className="mx-5 flex flex-col items-center">
      <h1 className="text-3xl m-4 text-center">
        {"Same nutrition, same quality, 20% less cost."}
      </h1>
      <div className="w-auto flex text-sm border border-[rgb(0,0,23)] rounded-lg py-2 px-2 space-x-1 items-center justify-center my-2 bg-white">
        <button 
          onClick={() => setActiveTab('regular')}
          className={`w-[132px] mx-2 py-2 px-3 rounded ${activeTab === 'regular' ? 'bg-[rgb(0,0,23)] text-[rgb(235,245,255)]' : 'bg-white text-[rgb(0,0,23)]'}`}
        >
          Regular shop
        </button>
        <button 
          onClick={() => setActiveTab('cartberry')}
          className={`w-[132px] mx-2 py-2 px-3 rounded ${activeTab === 'cartberry' ? 'bg-[rgb(0,0,23)] text-[rgb(235,245,255)]' : 'bg-white text-[rgb(0,0,23)]'}`}
        >
          Cartberry shop
        </button>
      </div>
      <CartTable tableType={activeTab}/>
    </div>
    
  )
}

Compare.displayName = 'Compare'

export default Compare
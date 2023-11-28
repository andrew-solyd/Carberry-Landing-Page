"use client"

import { useState } from 'react'
import CartTable from '@/components/table-v2'

const Compare = () => {

  const [activeTab, setActiveTab] = useState('regular')

  return (
    <div className="mx-5 flex flex-col items-center">
      <h1 className="text-3xl m-4 text-center">
        {"Same nutrition, same quality, 40% less cost."}
      </h1>
      <div className="w-auto flex text-sm border border-[rgb(0,0,23)] rounded-lg py-2 px-2  my-2 bg-white">
        <button 
          onClick={() => setActiveTab('regular')}
          className={`w-[125px] mx-2 py-2 px-3 rounded-md ${activeTab === 'regular' ? 'bg-[rgb(0,0,23)] text-[rgb(235,245,255)]' : 'bg-white text-[rgb(0,0,23)]'}`}
        >
          Regular shop
        </button>
        <button 
          onClick={() => setActiveTab('cartberry')}
          className={`w-[125px] mx-2 py-2 px-3 rounded-md ${activeTab === 'cartberry' ? 'bg-[rgb(0,0,23)] text-[rgb(235,245,255)]' : 'bg-white text-[rgb(0,0,23)]'}`}
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
"use client"

import { useState } from 'react'
import CartTable from '@/components/table'

const Compare = () => {

  const [activeTab, setActiveTab] = useState('regular')

  return (
    <div className="mx-5 flex flex-col items-center">
      <div className="flex text-xs border border-[rgb(0,0,23)] rounded-lg py-2 px-3 space-x-2 w-[420px] mx-auto items-center justify-center">
        <button 
          onClick={() => setActiveTab('regular')}
          className={`w-[180px] mx-2 py-2 px-4 rounded ${activeTab === 'regular' ? 'bg-[rgb(0,0,23)] text-[rgb(235,245,255)]' : 'bg-[rgb(235,245,255)] text-[rgb(0,0,23)]'}`}
        >
          Your regular cart
        </button>
        <button 
          onClick={() => setActiveTab('cartberry')}
          className={`w-[180px] mx-2 py-2 px-4 rounded ${activeTab === 'cartberry' ? 'bg-[rgb(0,0,23)] text-[rgb(235,245,255)]' : 'bg-[rgb(235,245,255)] text-[rgb(0,0,23)]'}`}
        >
          41% saved with Cartberry
        </button>
      </div>
      <CartTable tableType={activeTab}/>
    </div>
    
  )
}

Compare.displayName = 'Compare'

export default Compare
'use client'

import { useState } from 'react'
import Image from 'next/image'
import CartTable from '@/components/table'

const Compare = () => {

  const [isAfterVisible, setIsAfterVisible] = useState(false)

  const handleClick = () => {
    setIsAfterVisible(!isAfterVisible)
  }

  return (
    <div className="mx-5 flex flex-col items-center">
      <div id="before_text" className={`max-w-[550px]`}>
        <h1 className="text-3xl text-center">
          See the difference
        </h1>
        <p className="mt-4 text-center mb-10 mx-5 sm:mx-10">
          Written, typed or texted. Going into the store with a shopping list is a good start. But checkout is still a surprise.
        </p>
      </div>
      
      <div className="flex flex-row">
        <div id ="before" className={`w-full sm:min-w-[320px] flex flex-col items-center sm:items-start sm:pl-5 transition-opacity duration-1000 ${isAfterVisible ? 'opacity-0 scale-0 absolute' : 'opacity-100 scale-100'}`}>
          <div className="rounded-lg overflow-hidden m-1">
            <Image src="/list.png" alt="Shopping list" width={320} height={320}/>
          </div>
        </div>
        <div id="after" className={`flex flex-col items-center m-1 transition-opacity duration-1000 ${isAfterVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 absolute'}`}>
          <CartTable tableType={'regular'}/>
        </div>
      </div>
      <button onClick={handleClick}>Change me</button>
    </div>
    
  )
}

Compare.displayName = 'Compare'

export default Compare
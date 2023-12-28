// pages/demo.tsx

import '@/app/globals.css'

import { HiOutlineMail } from "react-icons/hi"
import { PiKeyReturnFill } from "react-icons/pi"

import Header from '@/components/header'
import Footer from '@/components/footer'
import CartTable from '@/components/table'

export default function Demo() {
  return (
        <div className="flex flex-col min-h-screen justify-between">
          <main className="flex flex-col items-center">
            <div className="px-7 mt-2 w-full">
              <Header/>
            </div>
      
            <div className="flex flex-col p-4 border border-slate-300 rounded-md" style={{ width: '580px', height: '475px'}}>
              <div className="flex flex-row mb-3 space-x-2 justify-between">
                <div>
                  <div className="flex flex-row justify-between items-end mb-1">
                    <span className="text-slate-800 text-lg font-semibold">Shopping List</span>
                    <span className="text-slate-400 text-xs font-extralight">11 items</span>
                  </div>
                  <CartTable tableType='regular'/>
                </div>
                <div className="flex flex-col justify-between ml-2">
                  <div className="pt-6">      
                    <div className="text-slate-800 min-h-16 mt-2 p-2 text-sm rounded-md border border-slate-800 hover:bg-slate-800 hover:text-gray-300" style={{ width: '210px'}}>
                      <span className="text-sm font-light" >AI prompt suggestion here</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 text-md font-medium">Total: $24.99</span>
                    <span className="text-slate-600 text-2xl font-medium mr-4"><HiOutlineMail /></span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 p-4 w-full h-full rounded-md flex justify-between">
                <span className="text-gray-300 text-sm font-light">My prompt input in here</span>
                <div className="flex items-end">
                  <span className="text-gray-300 text-2xl"><PiKeyReturnFill /></span>
                </div>
              </div>
            </div>
          </main>
          <div className="mt-10 w-full">
            <Footer/>
          </div>
        </div>
  )
}

const container = {
  borderWidth: "0px",
  borderColor: "rgba(0,173,238,0.5)",
  borderRadius: "1.5rem",
  background: "linear-gradient(#fff, rgb(0 0 0 / 0.02))",
  boxShadow: "0px 0px 0px 1px var(--shadow-color), 0px 1px 1px -0.5px var(--shadow-color), 0px 3px 3px -1.5px var(--shadow-color), 0px 6px 6px -3px var(--shadow-color), 0px 12px 12px -6px var(--shadow-color), 0px 24px 24px -12px var(--shadow-color)",
  "--shadow-color": "rgb(0 0 0 / 0.06)"
}
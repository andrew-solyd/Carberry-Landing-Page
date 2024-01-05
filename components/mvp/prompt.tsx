import { PiKeyReturnFill } from 'react-icons/pi'

export const PromptBar = () => {
  return (
    <div id="bottomRow" className="bg-slate-800 bg-opacity-90 p-4 w-full h-full rounded-xl flex justify-between mb-2">
      <span className="text-gray-300 text-sm font-light">My prompt input in here</span>
      <div className="flex items-end">
          <span className="text-gray-300 text-2xl"><PiKeyReturnFill /></span>
        </div>
      </div>
  )
}

export default PromptBar
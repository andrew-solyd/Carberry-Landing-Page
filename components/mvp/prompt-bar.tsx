import { PiKeyReturnFill } from 'react-icons/pi'

export const PromptBar = () => {
  return (
    <div id="bottomRow" className="bg-slate-800 bg-opacity-90 p-4 rounded-xl flex justify-between min-h-16">
      <span className="text-gray-500 text-sm font-light">Type your prompt</span>
      <div className="flex items-end">
          <span className="text-gray-300 text-2xl"><PiKeyReturnFill /></span>
        </div>
      </div>
  )
}

export default PromptBar
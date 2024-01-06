// components/mvp/prompt-bar.tsx

import { PiKeyReturnFill } from 'react-icons/pi'
import { useState, useRef, useEffect } from 'react'

export const PromptBar = ({ onClick }: { onClick: () => void }) => {
  const [inputValue, setInputValue] = useState('')
  const [placeholder, setPlaceholder] = useState('Type your prompt')
  const [isFocused, setIsFocused] = useState(false)
  const [opacity, setOpacity] = useState(1)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value)
  }

  const handleInputFocus = () => {
    setPlaceholder('')
    onClick()
    setOpacity(0)
    setTimeout(() => {
      setIsFocused(true)
      setOpacity(1)
    }, 500)
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '14px'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [inputValue])

  return (
    <div className={`bg-slate-800 bg-opacity-90 p-3 rounded-xl flex flex-col justify-between ${isFocused ? 'h-[440px]' : ''} transition-opacity duration-200 ease-in-out`} style={{opacity: opacity}}>
      <textarea 
        ref={textareaRef}
        value={inputValue} 
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        className="text-gray-300 bg-transparent placeholder-gray-400 text-sm font-light focus:outline-none whitespace-pre-wrap overflow-auto resize-none" 
        placeholder={placeholder}
      />
      <div className="flex flex-row justify-end">
        <button className="">
          <span className="text-gray-300 text-2xl hover:text-gray-100"><PiKeyReturnFill /></span>
        </button>
      </div>
    </div>
  )
}

export default PromptBar
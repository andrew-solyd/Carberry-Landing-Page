// components/mvp/SuggestionsList.tsx

import React, { useEffect, useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { suggestions } from '@/components/mvp/data'
import PromptBar from '@/components/mvp/prompt-bar'

const Suggestion = ({ text }: { text: string }) => (
    <div className="cursor-pointer w-full hover:text-gray-100 min-h-16 w-full mb-4 p-3 text-sm rounded-xl bg-slate-800 bg-opacity-90 text-gray-300">
      <span className="text-sm font-light" >{text}</span>
    </div>
)

const Prompts = () => {
  const [loadedSuggestions, setLoadedSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(true) 

  useEffect(() => {
    suggestions.slice(0, 3).forEach((suggestion, index) => {
      setTimeout(() => {
        setLoadedSuggestions(prev => [...prev, suggestion])
      }, index * 500) // Change delay as needed
    })
    setTimeout(() => {
      setLoadedSuggestions(prev => [...prev, 'PromptBar'])
    }, suggestions.length * 500)
  }, [])

  const handlePromptBarClick = () => {
    setShowSuggestions(false) // Hide suggestions when prompt bar is clicked
  }

  return (
    <div className="pt-4">
      <TransitionGroup>
        {loadedSuggestions.map((suggestion, index) => (
          suggestion === 'PromptBar' 
            ? <CSSTransition key={index} timeout={500} classNames="item">
                <PromptBar onClick={handlePromptBarClick} /> 
              </CSSTransition>
            : showSuggestions && (
              <CSSTransition key={index} timeout={500} classNames="item">
                <Suggestion text={suggestion}/>
              </CSSTransition>
            )
        ))}
      </TransitionGroup>
    </div>
  )
}

export default Prompts
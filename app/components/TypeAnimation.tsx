'use client'

import { useState, useEffect, useRef } from 'react'

const phrases = [
  "Draft a post about your latest product launch",
  "Write a tweet about your new AI feature",
  "Tweet an update about your recent milestone",
  "Create a thread about your startup journey"
]

export default function TypeAnimation() {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(30)
  const [isTyping, setIsTyping] = useState(true)
  const [userHasTyped, setUserHasTyped] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isTyping) return;

    const currentPhrase = phrases[phraseIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentPhrase.length) {
          setText(currentPhrase.slice(0, text.length + 1))
          setTypingSpeed(30)
        } else {
          setIsDeleting(true)
        }
      } else {
        if (text.length > 0) {
          setText(currentPhrase.slice(0, text.length - 1))
          setTypingSpeed(10)
        } else {
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
          setTypingSpeed(30)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, phraseIndex, isDeleting, isTyping])

  const handleTextClick = () => {
    setIsTyping(false)
    setText('')
    setUserHasTyped(false)
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, 0)
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    if (!userHasTyped && e.target.value.length > 0) {
      setUserHasTyped(true)
    }
  }

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Handle the image upload here
      console.log('Image selected:', file.name)
    }
  }

  const handleGenerate = () => {
    if (userHasTyped) {
      // Handle generation logic here
      console.log('Generating for:', text)
    }
  }

  return (
    <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
      <div className="flex-1 bg-[#0d1620] rounded-lg p-4 pb-12 min-h-[120px] sm:min-h-[100px] flex items-start sm:items-center relative">
        {isTyping ? (
          <div className="flex-1 cursor-text w-full" onClick={handleTextClick}>
            <div className="text-gray-300 leading-relaxed break-words">
              <span>{text}</span>
              <span className="w-[2px] h-5 bg-brand-blue ml-1 animate-pulse inline-block align-middle"></span>
            </div>
          </div>
        ) : (
          <textarea
            ref={inputRef as any}
            className="w-full bg-transparent text-gray-300 outline-none resize-none leading-relaxed min-h-[60px] sm:min-h-[40px]"
            value={text}
            onChange={(e) => handleTextChange(e as any)}
            onBlur={() => {
              if (!text) {
                setIsTyping(true)
                setUserHasTyped(false)
              }
            }}
            placeholder="Type your message..."
            rows={3}
          />
        )}
        
        {/* Image upload button */}
        <button 
          onClick={handleImageClick}
          className="absolute left-3 bottom-3 p-2 rounded-full bg-brand-blue bg-opacity-20 hover:bg-opacity-30 transition-colors"
        >
          <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
      <button 
        onClick={handleGenerate}
        className={`px-6 py-3 rounded-full font-medium transition-all duration-200 w-full sm:w-auto ${
          userHasTyped 
            ? 'bg-brand-blue text-white hover:bg-opacity-90' 
            : 'bg-brand-blue bg-opacity-40 text-white'
        }`}
      >
        Generate
      </button>
    </div>
  )
} 
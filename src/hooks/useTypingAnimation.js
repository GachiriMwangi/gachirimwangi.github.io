import { useState, useEffect, useRef } from 'react'

export default function useTypingAnimation(texts, charDelay = 200) {
  const [displayText, setDisplayText] = useState('')
  const textIndexRef = useRef(0)
  const charIndexRef = useRef(0)

  useEffect(() => {
    let timeout

    function type() {
      const currentText = texts[textIndexRef.current]

      if (charIndexRef.current < currentText.length) {
        setDisplayText(currentText.slice(0, charIndexRef.current + 1))
        charIndexRef.current += 1
        timeout = setTimeout(type, charDelay)
      } else {
        timeout = setTimeout(() => {
          setDisplayText('')
          charIndexRef.current = 0
          textIndexRef.current = (textIndexRef.current + 1) % texts.length
          timeout = setTimeout(type, charDelay)
        }, 1500)
      }
    }

    timeout = setTimeout(type, charDelay)
    return () => clearTimeout(timeout)
  }, []) // intentionally empty — runs once on mount

  return displayText
}

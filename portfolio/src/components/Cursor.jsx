import React, { useEffect, useRef } from 'react'

const Cursor = ({ themeColor }) => {
  const cursorRef = useRef(null)
  const requestRef = useRef()
  const previousTimeRef = useRef()
  const posRef = useRef({ x: 0, y: 0 })
  const targetPosRef = useRef({ x: 0, y: 0 })
  
  const darkenColor = (color, amount = 20) => {
    if (color.startsWith('#')) {
      let r = parseInt(color.substr(1, 2), 16)
      let g = parseInt(color.substr(3, 2), 16)
      let b = parseInt(color.substr(5, 2), 16)
      
      r = Math.max(0, r - amount)
      g = Math.max(0, g - amount)
      b = Math.max(0, b - amount)
      
      return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
    }
    return color
  }

  const borderColor = darkenColor(themeColor)

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetPosRef.current = {
        x: e.clientX,
        y: e.clientY
      }
    }
    
    document.addEventListener('mousemove', handleMouseMove)

    // Animation loop avec requestAnimationFrame pour plus de fluidité
    const animate = (time) => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current
        const factor = Math.min(deltaTime / 16, 4) * 0.08 // 0.08 est le facteur de vitesse
        
        // Interpolation avec easing
        posRef.current.x += (targetPosRef.current.x - posRef.current.x) * factor
        posRef.current.y += (targetPosRef.current.y - posRef.current.y) * factor
        
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`
        }
      }
      previousTimeRef.current = time
      requestRef.current = requestAnimationFrame(animate)
    }
    
    requestRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(requestRef.current)
    }
  }, [])

  return (
    <div 
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: '-25px',
        left: '-25px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: themeColor,
        border: `2px solid ${borderColor}`,
        boxShadow: `0 0 0 1px white`,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(0, 0)',
        willChange: 'transform', // Optimisation pour les animations
        mixBlendMode: 'difference' 
      }}
    />
  )
}

export default Cursor
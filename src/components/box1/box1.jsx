import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'

// click, initial, transition and click rotate

const Box1 = () => {
 
    const [isAnimating, setIsAnimating] = useState(false)

  return (
    <>
    <span>Animation N°1</span>
    <div className='box_container'>
        <h2>Click on the box</h2>
        <h5>and it should be going to the right (opacity: 0 at the initiation)</h5>
        <h2>Then click again</h2>
        <h5>and it should be going back to the left</h5>
        <motion.div 
            className='box'

            animate={{
                x: isAnimating ? "60vw" : 0,
                opacity: isAnimating ? 1 : 0.5,
                rotate: isAnimating ? 360 : 0,
                borderRadius: "12%"                
            }}

            initial={{
                opacity: 0.1
            }}

            transition= {{  
                type: "spring",
                stiffness: 60,
            }}
            onClick={() => setIsAnimating(!isAnimating)}
            >

        </motion.div>
    </div>
    </>
  )
}

export default Box1
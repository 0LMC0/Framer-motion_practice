import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'

// click, initial, transition and click rotate

const Box1 = () => {
 
    const [isAnimating, setIsAnimating] = useState(false)

  return (
    <div className='box_container'>
        <motion.div 
            className='box'

            animate={{
                x: isAnimating ? "75vw" : 0,
                opacity: isAnimating ? 1 : 0.5,
                rotate: isAnimating ? 360 : 0
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
  )
}

export default Box1
import React from 'react'
import { motion } from 'framer-motion'

// scale with array, 

const Box4 = () => {

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
              scale: [1, 1.4, 1.4, 1, 1],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              rotate: [0, 0, 270, 270, 0]
            }}
            transition={{
              duration: 2
            }}
            >
        </motion.div>
    </div>
    </>
  )
}

export default Box4
import React from 'react'
import { motion } from 'framer-motion'

// useAnimation hook

const Box5 = () => {

  return (
    <div className='box_container'>
        <button>Move right</button>
        <button>Move left</button>
        <button>circle</button>
        <button>Square</button>
        <button>Stop</button>
        <motion.div 
            className='box'
 
            >
        </motion.div>
    </div>
  )
}

export default Box5
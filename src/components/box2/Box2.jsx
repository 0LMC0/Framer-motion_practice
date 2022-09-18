import React from 'react'
import { motion } from 'framer-motion'

// hover(whileHover), Click(whileTap), Drag

const Box2 = () => {

  return (
    <>
    <span>Animation N°2</span>
    <div className='box_container'>
        <h2>Hover the box.</h2>
        <h2>Then click it.</h2>
        <h2>And dragged it!</h2>
        <h5>Drag, dragConstrains, whileHover & whileTap</h5>
        <motion.div 
            className='box'
            drag
            dragConstraints={{
              right: 20,
              left: -20,
              top: 5, 
              bottom: 5
            }}
            whileHover={{
              scale: 1.1
            }}
            whileTap={{
              scale: 0.9
            }}
            >

        </motion.div>
    </div>
    </>
  )
}

export default Box2
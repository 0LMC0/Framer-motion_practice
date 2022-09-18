import React from 'react'
import { motion, useAnimation } from 'framer-motion'

// useAnimation hook

const Box5 = () => {

  const controls = useAnimation()

  return (
    <>
    <span>Animation N°1</span>
    <div className='box_container'>
        <h2>Controls!</h2>
        <h5>Then you can play with the diferents animation in any % of the another animation.</h5>
        <h3>For example = circle + left or square + stop.</h3>
        <button onClick={() => {
          controls.start({
            x: "60vw",
            transition: { duration: 1.5 }
          })
        }}>Move right</button>
        <button onClick={() => {
          controls.start({
            x: 0,
            transition: { duration: 1.5 }
          })
        }}>Move left</button>
        <button onClick={() => {
          controls.start({
            borderRadius: "50%",
            transition: { duration: 1.5 }
          })
        }}>circle</button>
        <button onClick={() => {
          controls.start({
            borderRadius: 0,
            transition: { duration: 1.5 }
          })
        }}>Square</button>
        <button onClick={() => {
          controls.stop()
        }}>Stop</button>
        <motion.div 
            className='box'
            animate={ controls }
            >
        </motion.div>
    </div>
    </>
  )
}

export default Box5
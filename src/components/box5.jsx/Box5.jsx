import React from 'react'
import { motion, useAnimation } from 'framer-motion'

// useAnimation hook

const Box5 = () => {

  const controls = useAnimation()

  return (
    <>
    <span>Animation N°1</span>
    <div className='box_container'>
        <h2>Click on the box</h2>
        <h5>and it should be going to the right (opacity: 0 at the initiation)</h5>
        <h2>Then click again</h2>
        <h5>and it should be going back to the left</h5>
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
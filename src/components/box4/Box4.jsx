import React from 'react'
import { motion } from 'framer-motion'

// scale with array, 

const Box4 = () => {
  
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <>
    <span>Animation N°4</span>
    <div className='box_container'>
        <h2>Reload the page!</h2>
        <h5>Scale with array and transitions + borderRadius</h5>
        <button onClick={refreshPage}>Click to reload!</button>
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
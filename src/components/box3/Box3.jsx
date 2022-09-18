import React from 'react'
import { motion } from 'framer-motion'
import "./Box3.css"

// animation staggerChildren [always in parent *-._]

const Box3 = () => {

    const boxVariant = {
        hidden:{
            x: "-100vw"
        },
        visible: {
            x:0,
            transition: {
                delay: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.4,
            }
        }
    }

    const listVariant = {
        hidden:{
            y: 10,
            opacity: 0
        },
        visible: {
            y:0,
            opacity: 1,
        }
    }

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
            variants={boxVariant}
            animate="visible"
            initial="hidden"
            >

            {[1,2,3].map(box=>{
                return(
                    <motion.li
                    className='BoxItem'
                    variants={listVariant}
                    ></motion.li>
                    ) 
            })}
        </motion.div>
    </div>
    </>
  )
}

export default Box3
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
    <div className='box_container'>
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
  )
}

export default Box3
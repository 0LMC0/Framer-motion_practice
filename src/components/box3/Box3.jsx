import React from 'react'
import { motion } from 'framer-motion'
import "./Box3.css"

// 

const Box3 = () => {

    const boxVariant = {
        hidden:{
            x: "-100vw"
        },
        visible: {
            x:0,
            transition: {
                delay: 0.5
            }
        }
    }

  return (
    <div className='box_container'>
        <motion.div 
            className='box'
            variants={boxVariant}
            animate={visible}
            initial={hidden}
            >

            {[1,2,3].map(box=>{
                return <motion.li className='BoxItem'></motion.li>
            })}
        </motion.div>
    </div>
  )
}

export default Box3
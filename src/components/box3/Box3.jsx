import React from 'react'
import { motion } from 'framer-motion'
import "./Box3.css"

// animation staggerChildren [always in parent *-._]

const Box3 = () => {

    function refreshPage() {
    window.location.reload(false);
    }

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
    <span>Animation N°3</span>
    <div className='box_container'>
        <h2>Reload the page!</h2>
        <h5>Variants and staggerChildren</h5>
        <button onClick={refreshPage}>Click to reload!</button>
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
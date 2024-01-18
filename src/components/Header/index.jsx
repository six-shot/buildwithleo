'use client';
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button';
import styles from './style.module.scss';
import Nav from './Nav';

const menu = {
    open: {
        width: "480px",
        height: "50vh",
       
        
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}
    },
    closed: {
        width: "100px",
        height: "40px",
        
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
    }
}

export default function Index() {
    const [isActive, setIsActive] = useState(false);

    return (
      <div className="flex justify-between items-center w-full h-[80px] relative">
        <h5 className="uppercase text-white text-[24px] font-bold ">
          Workwithleo
        </h5>
        <div className={styles.header}>
          <motion.div
            className={styles.menu}
            variants={menu}
            animate={isActive ? "open" : "closed"}
            initial="closed"
          >
            <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
          </motion.div>
          <Button
            isActive={isActive}
            toggleMenu={() => {
              setIsActive(!isActive);
            }}
          />
        </div>
      </div>
    );
}

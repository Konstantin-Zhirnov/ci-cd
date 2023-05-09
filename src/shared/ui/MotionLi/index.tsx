import React from 'react'
import { motion } from 'framer-motion'

import classes from './MotionLi.module.sass'

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    display: 'flex',
    transition: {
      delay: i * 0.3,
    },
  }),
  hidden: {
    scale: 0.1,
    opacity: 0,
  },
}

interface IProps {
  custom: number
  dataTestId?: string
  children: React.ReactNode
}

const MotionLi: React.FC<IProps> = ({ custom, dataTestId, children }) => {
  return (
    <motion.li
      variants={variants}
      custom={custom}
      initial="hidden"
      animate="visible"
      className={classes.container}
      data-testid={dataTestId}
    >
      {children}
    </motion.li>
  )
}

export default MotionLi

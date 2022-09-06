import React from 'react'
import { motion } from 'framer-motion'

import { variants } from '../../constants'

import classes from './MotionCard.module.sass'

interface IProps {
  custom: number
  children: React.ReactNode
  dataTestId?: string
}

const MotionCard: React.FC<IProps> = ({ custom, children, dataTestId }) => {
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

export default MotionCard

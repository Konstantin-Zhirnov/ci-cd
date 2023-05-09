import React from 'react'
import { motion } from 'framer-motion'

import { HomeCard } from '../../entities'
import { cards } from '../HomeCards/cards'

import classes from './HomeCards.module.sass'

const HomeCards: React.FC = () => {
  return (
    <motion.ul className={classes.cards}>
      {cards.map((card, index) => (
        <HomeCard
          key={index}
          index={index}
          title={card.title}
          content={card.content}
          actions={card.actions}
        />
      ))}
    </motion.ul>
  )
}

export default HomeCards

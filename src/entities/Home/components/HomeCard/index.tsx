import React from 'react'
import Divider from '@mui/material/Divider'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

import { CardType } from '../../types'

import { MotionLi } from '../../../../shared'

import classes from './Card.module.sass'

const HomeCard: React.FC<CardType> = ({ index, title, content, actions }) => {
  return (
    <MotionLi custom={index + 1}>
      <CardContent className={classes.card}>
        <h3>{title}</h3>
        <Divider className={classes.divider} />
        {content}
      </CardContent>
      <CardActions>{actions}</CardActions>
    </MotionLi>
  )
}

export default HomeCard

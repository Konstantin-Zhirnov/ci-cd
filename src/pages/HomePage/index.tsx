import React from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { Divider, Link } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

import { useAppDispatch } from '../../redux/hooks'
import { fetchActivationEmail } from '../../redux/authorization/asyncActions'

import InformationAboutPage from '../../Components/InformationAboutPage'
import MotionCard from '../../Components/MotionCard'
import { cards } from './cards'

import classes from './HomePege.module.sass'

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch()

  const { link } = useParams()

  React.useEffect(() => {
    if (link) {
      dispatch(fetchActivationEmail(link))
    }
  }, [link])

  return (
    <div className={classes.container}>
      <InformationAboutPage>
        <h1>Home page</h1>
        <p>
          This React application is a set of implemented functionality written in TypeScript and
          using the Material-UI library. CI/CD is carried out through the application of: github.com
          and netlify.com
        </p>
        <p>
          Authorization was made using the JWT token and confirmation by email. The server is
          written in Node.js, Express using MongoDB.
        </p>
        <Link
          href="https://github.com/Konstantin-Zhirnov/ci-cd"
          target="_blank"
          className={classes.link}
        >
          GitHub
        </Link>
      </InformationAboutPage>

      <motion.ul className={classes.cards}>
        {cards.map((card, index) => (
          <MotionCard key={index} custom={index + 1}>
            <CardContent>
              <h3>{card.title}</h3>
              <Divider className={classes.divider} />
              {card.content}
            </CardContent>
            <CardActions>{card.actions}</CardActions>
          </MotionCard>
        ))}
      </motion.ul>
    </div>
  )
}

export default HomePage

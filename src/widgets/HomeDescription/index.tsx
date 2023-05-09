import React from 'react'
import { Link } from '@mui/material'

import { ArticleWrapper } from '../../shared'

import classes from './HomeDescription.module.sass'

const HomeDescription: React.FC = () => {
  return (
    <ArticleWrapper>
      <h1>Home page</h1>
      <p>
        This React application is a set of implemented functionality written in{' '}
        <strong>TypeScript</strong> and using the <strong>Material-UI library</strong>. During the
        development of this application, an architectural methodology was used for the design of
        frontend applications -{' '}
        <strong>
          <a href="https://feature-sliced.design/docs" target="_blank" rel="noreferrer">
            Feature-Sliced Design (FSD)
          </a>
        </strong>
        . <strong>CI/CD</strong> is carried out through the application of: github.com and
        vercel.com
      </p>
      <p>
        Authorization was made using the <strong>JWT token</strong> and confirmation by email. The
        server is written in <strong>Node.js, Express using MongoDB</strong>.
      </p>
      <Link
        href="https://github.com/Konstantin-Zhirnov/ci-cd"
        target="_blank"
        className={classes.link}
      >
        GitHub
      </Link>
    </ArticleWrapper>
  )
}

export default HomeDescription

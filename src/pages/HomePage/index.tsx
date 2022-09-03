import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import Card from '@mui/material/Card'
import { Link } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

import { variants } from '../../constants'

import classes from './HomePege.module.sass'

const HomePage: React.FC = () => {
  return (
    <div className={classes.container}>
      <h1>Home page</h1>
      <p>
        This React application is a set of implemented functionality written in TypeScript and using
        the Material-UI library. CI/CD is carried out through the application of: github.com and
        netlify.com
      </p>
      <Link
        href="https://github.com/Konstantin-Zhirnov/ci-cd"
        target="_blank"
        className={classes.link}
      >
        GitHub
      </Link>

      <motion.div className={classes.cards}>
        <motion.div variants={variants} custom={1} initial="hidden" animate="visible">
          <Card className={classes.card}>
            <CardContent>
              <h3>Posts page:</h3>
              <p>
                The Posts page uses <strong>RTK QUERY</strong> with the ability to add and delete a
                post.
              </p>
              <p>
                Requests work fine, only there are responses from <strong>«jsonplaceholder»</strong>{' '}
                that are peculiar.
              </p>
              <p>
                Also on this page, a filter is implemented by the number of displayed posts and
                content.
              </p>
              <p>
                The <strong>«framer-motion»</strong> library is used to animate the display of posts
              </p>
            </CardContent>
            <CardActions>
              <NavLink to="/posts" className={classes.btn}>
                Go to page
              </NavLink>
            </CardActions>
          </Card>
        </motion.div>

        <motion.div variants={variants} custom={2} initial="hidden" animate="visible">
          <Card className={classes.card}>
            <CardContent>
              <h3>Users page:</h3>
              <p>
                This page uses the classic <strong>Redux toolkit</strong>.
              </p>
              <p>
                When you click on the <strong>«more details»</strong> button, a request is made for
                more specific information about the selected user.
              </p>
              <p>The received information is displayed in the right window.</p>
              <p>
                This page also provides the possibility of manually changing the width of the
                blocks. The&nbsp;
                <strong>«re-resizable»</strong> library is used.
              </p>
            </CardContent>
            <CardActions>
              <NavLink to="/users" className={classes.btn}>
                Go to page
              </NavLink>
            </CardActions>
          </Card>
        </motion.div>

        <motion.div variants={variants} custom={3} initial="hidden" animate="visible">
          <Card className={classes.card}>
            <CardContent>
              <h3>Comments page:</h3>
              <p>
                The Comments page also uses the classic <strong>Redux toolkit</strong>. Only the
                display of detailed information about the selected comment is made in a new tab.
              </p>
              <p>
                New comments are received when the page is <strong>scrolled</strong>.
              </p>
            </CardContent>
            <CardActions>
              <NavLink to="/comments" className={classes.btn}>
                Go to page
              </NavLink>
            </CardActions>
          </Card>
        </motion.div>

        <motion.div variants={variants} custom={4} initial="hidden" animate="visible">
          <Card className={classes.card}>
            <CardContent>
              <h3>Apollo page:</h3>
              <p>
                The Apollo page presents the display, creation, modification and deletion of a todo
                list.
              </p>
              <p>All queries are implemented using graphql and the Apollo library.</p>
            </CardContent>
            <CardActions>
              <NavLink to="/apollo" className={classes.btn}>
                Go to page
              </NavLink>
            </CardActions>
          </Card>
        </motion.div>

        <motion.div variants={variants} custom={5} initial="hidden" animate="visible">
          <Card className={classes.card}>
            <CardContent>
              <h3>Image page:</h3>
              <p>On the Image page, a lazy loading of an image of a huge size is carried out.</p>
            </CardContent>
            <CardActions>
              <NavLink to="/image" className={classes.btn}>
                Go to page
              </NavLink>
            </CardActions>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HomePage

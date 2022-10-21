import React from 'react'
import { motion } from 'framer-motion'

import { Divider, Link } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

import InformationAboutPage from '../../Components/InformationAboutPage'
import ExternalLinkButton from '../../Components/ExternalLinkButton'
import MotionCard from '../../Components/MotionCard'
import LinkButton from '../../Components/LinkButton'

import Lotto from './lotto.jpg'
import ETM from './etm.jpg'
import Events from './events.jpg'

import classes from './HomePege.module.sass'

const HomePage = () => {
  return (
    <div className={classes.container}>
      <InformationAboutPage>
        <h1>Home page</h1>
        <p>
          This React application is a set of implemented functionality written in TypeScript and
          using the Material-UI library. CI/CD is carried out through the application of: github.com
          and netlify.com
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
        <MotionCard custom={1}>
          <CardContent>
            <h3>Apollo page</h3>
            <Divider className={classes.divider} />
            <p>
              The Apollo page presents the display, creation, modification and deletion of a todo
              list.
            </p>
            <p>
              All queries are implemented using <strong>graphql</strong> and the{' '}
              <strong>Apollo</strong> library.
            </p>
          </CardContent>
          <CardActions>
            <LinkButton link="/apollo" title="Go to page" />
          </CardActions>
        </MotionCard>

        <MotionCard custom={2}>
          <CardContent>
            <h3>Users page</h3>
            <Divider className={classes.divider} />
            <p>
              This page uses the classic <strong>Redux toolkit</strong>.
            </p>
            <p>
              When you click on the <strong>«more details»</strong> button, a request is made for
              more specific information about the selected user.
            </p>
            <p>The received information is displayed in the right window.</p>
            <p>
              This page also provides the possibility of manually changing the width of the blocks.
              The&nbsp;
              <strong>«re-resizable»</strong> library is used.
            </p>
          </CardContent>
          <CardActions>
            <LinkButton link="/users" title="Go to page" />
          </CardActions>
        </MotionCard>

        <MotionCard custom={3}>
          <CardContent>
            <h3>Posts page</h3>
            <Divider className={classes.divider} />
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
            <LinkButton link="/posts" title="Go to page" />
          </CardActions>
        </MotionCard>

        <MotionCard custom={4}>
          <CardContent>
            <h3>Comments page</h3>
            <Divider className={classes.divider} />
            <p>
              The Comments page also uses the classic <strong>Redux toolkit</strong>. A new tab
              displays detailed information about the selected comment.
            </p>
            <p>
              Getting a new set of comments comes when the page is <strong>scrolled</strong>.
            </p>
          </CardContent>
          <CardActions>
            <LinkButton link="/comments" title="Go to page" />
          </CardActions>
        </MotionCard>

        <MotionCard custom={5}>
          <CardContent>
            <h3>Image page</h3>
            <Divider className={classes.divider} />
            <p>On the Image page, a lazy loading of an image of a huge size is carried out.</p>
          </CardContent>
          <CardActions>
            <LinkButton link="/image" title="Go to page" />
          </CardActions>
        </MotionCard>

        <MotionCard custom={6}>
          <CardContent>
            <h3>Lotto 6 x 45</h3>
            <Divider className={classes.divider} />
            <img src={Lotto} alt="lotto" className={classes.image} />
            <p>
              Lotto 6 x 45 app implemented using <strong>React</strong> and{' '}
              <strong>Redux toolkit</strong>.
            </p>
          </CardContent>
          <CardActions>
            <ExternalLinkButton link="https://clever-cuchufli-1bf760.netlify.app/" title="Deploy" />
            <ExternalLinkButton
              link="https://github.com/Konstantin-Zhirnov/react-6-45/"
              title="GitHub"
            />
          </CardActions>
        </MotionCard>

        <MotionCard custom={7}>
          <CardContent>
            <h3>ETM</h3>
            <Divider className={classes.divider} />
            <img src={ETM} alt="ETM" className={classes.image} />
            <p>
              <p>
                This application combines an <strong>online store</strong> and <strong>b2b</strong>.
                During development, the following were used:{' '}
                <strong>React, Next, Material-UI, Node.js, Express</strong>.
              </p>
            </p>
          </CardContent>
          <CardActions>
            <ExternalLinkButton link="https://www.etm.ru/ipro3" title="Link" />
          </CardActions>
        </MotionCard>

        <MotionCard custom={8}>
          <CardContent>
            <h3>ETM Events</h3>
            <Divider className={classes.divider} />
            <img src={Events} alt="Events" className={classes.image} />
            <p>
              This information portal is designed to display information about upcoming and past
              exhibitions. During development, the following were used:{' '}
              <strong>React, Next, Redux toolkit, Material-UI</strong>.
            </p>
          </CardContent>
          <CardActions>
            <ExternalLinkButton link="https://skills.etm.ru/" title="Link" />
          </CardActions>
        </MotionCard>
      </motion.ul>
    </div>
  )
}

export default HomePage

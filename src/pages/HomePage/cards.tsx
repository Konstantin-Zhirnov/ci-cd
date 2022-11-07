import React from 'react'

import ExternalLinkButton from '../../Components/ExternalLinkButton'
import LinkButton from '../../Components/LinkButton'

import Events from '../../images/events.jpg'
import Lotto from '../../images/lotto.jpg'
import ETM from '../../images/etm.jpg'
import OpenTable from '../../images/open-table.jpg'

import classes from './HomePege.module.sass'

export const cards = [
  {
    title: 'Apollo page',
    content: (
      <>
        <p>
          The Apollo page presents the display, creation, modification and deletion of a todo list.
        </p>
        <p>
          All queries are implemented using <strong>graphql</strong> and the <strong>Apollo</strong>{' '}
          library.
        </p>
      </>
    ),
    actions: <LinkButton link="/apollo" title="Go to page" />,
  },
  {
    title: 'Users page',
    content: (
      <>
        <p>
          This page uses the classic <strong>Redux toolkit</strong>.
        </p>
        <p>
          When you click on the <strong>«more details»</strong> button, a request is made for more
          specific information about the selected user.
        </p>
        <p>The received information is displayed in the right window.</p>
        <p>
          This page also provides the possibility of manually changing the width of the blocks.
          The&nbsp;
          <strong>«re-resizable»</strong> library is used.
        </p>
      </>
    ),
    actions: <LinkButton link="/users" title="Go to page" />,
  },
  {
    title: 'Posts page',
    content: (
      <>
        <p>
          The Posts page uses <strong>RTK QUERY</strong> with the ability to add and delete a post.
        </p>
        <p>
          Requests work fine, only there are responses from <strong>«jsonplaceholder»</strong> that
          are peculiar.
        </p>
        <p>
          Also on this page, a filter is implemented by the number of displayed posts and content.
        </p>
        <p>
          The <strong>«framer-motion»</strong> library is used to animate the display of posts
        </p>
      </>
    ),
    actions: <LinkButton link="/posts" title="Go to page" />,
  },
  {
    title: 'Comments page',
    content: (
      <>
        <p>
          The Comments page also uses the classic <strong>Redux toolkit</strong>. A new tab displays
          detailed information about the selected comment.
        </p>
        <p>
          Getting a new set of comments comes when the page is <strong>scrolled</strong>.
        </p>
      </>
    ),
    actions: <LinkButton link="/comments" title="Go to page" />,
  },
  {
    title: 'Image page',
    content: <p>On the Image page, a lazy loading of an image of a huge size is carried out.</p>,
    actions: <LinkButton link="/image" title="Go to page" />,
  },
  {
    title: 'Lotto 6 x 45',
    content: (
      <>
        <img src={Lotto} alt="lotto" className={classes.image} />
        <p>
          Lotto 6 x 45 app implemented using <strong>React</strong> and{' '}
          <strong>Redux toolkit</strong>.
        </p>
      </>
    ),
    actions: (
      <>
        <ExternalLinkButton link="https://clever-cuchufli-1bf760.netlify.app/" title="Deploy" />
        <ExternalLinkButton
          link="https://github.com/Konstantin-Zhirnov/react-6-45/"
          title="GitHub"
        />
      </>
    ),
  },
  {
    title: 'ETM Events',
    content: (
      <>
        <img src={Events} alt="Events" className={classes.image} />
        <p>
          This information portal is designed to display information about upcoming and past
          exhibitions. During development, the following were used:{' '}
          <strong>React, Next, Redux toolkit, Material-UI</strong>.
        </p>
      </>
    ),
    actions: <ExternalLinkButton link="https://skills.etm.ru/" title="Link" />,
  },
  {
    title: 'ETM',
    content: (
      <>
        <img src={ETM} alt="ETM" className={classes.image} />
        <p>
          This application combines an <strong>online store</strong> and <strong>b2b</strong>.
          During development, the following were used:{' '}
          <strong>React, Next, Material-UI, Node.js, Express</strong>.
        </p>
        <p>
          Available if you are in <strong>Russia</strong> or when using a <strong>VPN</strong>
        </p>
      </>
    ),
    actions: <ExternalLinkButton link="https://www.etm.ru/ipro3" title="Link" />,
  },
  {
    title: 'Test task',
    content: (
      <>
        <img src={OpenTable} alt="Events" className={classes.image} />
        <p>
          A test task for an interesting company: <strong>React, Redux toolkit</strong>.
        </p>
      </>
    ),
    actions: (
      <>
        <ExternalLinkButton link="https://sweet-ganache-708fa2.netlify.app/" title="Deploy" />
        <ExternalLinkButton
          link="https://github.com/Konstantin-Zhirnov/open-table"
          title="GitHub"
        />
      </>
    ),
  },
]

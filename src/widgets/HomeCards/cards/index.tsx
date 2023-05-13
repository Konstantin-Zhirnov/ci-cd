import React from 'react'

import { ExternalLinkButton, LinkButton } from '../../../shared'

import Lotto from './assets/lotto.jpg'
import OpenTable from './assets/open-table.jpg'
import Countries from './assets/countries.jpg'
import Grid from './assets/grid.jpg'

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
          Also on this page, a filter is implemented by the number of displayed posts and content.
        </p>
        <p>
          The <strong>«framer-motion»</strong> library is used to animate the display of posts
        </p>
        <p>
          The server part for this application (REST API) was also written by me using{' '}
          <strong>Node.js</strong> and <strong>Express</strong>.
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
    title: 'AG Grid React',
    content: (
      <>
        <img src={Grid} alt="AG Grid React" />
        <p>
          React is an application using the <strong>AG Grid React library</strong>. It implements a
          custom filter and custom floating filter for the <strong>Age</strong> field.
        </p>
      </>
    ),
    actions: (
      <>
        <ExternalLinkButton link="https://ag-grid-react-kappa.vercel.app/" title="Deploy" />
        <ExternalLinkButton
          link="https://github.com/Konstantin-Zhirnov/ag-grid-react"
          title="GitHub"
        />
      </>
    ),
  },
  {
    title: 'Lotto 6 x 45',
    content: (
      <>
        <img src={Lotto} alt="lotto" />
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
    title: 'Styled-components',
    content: (
      <>
        <img src={Countries} alt="Styled-components" />
        <p>
          This app implemented using: <strong>React, Styled-components, Cypress.</strong>
        </p>
      </>
    ),
    actions: (
      <>
        <ExternalLinkButton link="https://comfy-lollipop-21cac6.netlify.app/" title="Deploy" />
        <ExternalLinkButton
          link="https://github.com/Konstantin-Zhirnov/styled-components"
          title="GitHub"
        />
      </>
    ),
  },
  {
    title: 'Test task for «Open table»',
    content: (
      <>
        <img src={OpenTable} alt="Events" />
        <p>
          The test task received at the interview with the company «Open table»:{' '}
          <strong>React, Redux toolkit</strong>.
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

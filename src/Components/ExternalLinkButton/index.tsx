import React from 'react'

import classes from '../LinkButton/LinkButton.module.sass'

type PropsType = Record<'link' | 'title', string>

const ExternalLinkButton: React.FC<PropsType> = React.memo(({ link, title }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className={classes.btn}>
      {title}
    </a>
  )
})

export default ExternalLinkButton

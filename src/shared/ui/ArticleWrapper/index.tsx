import React from 'react'

import classes from './ArticleWrapper.module.sass'

interface IProps {
  children: React.ReactNode
}

const ArticleWrapper: React.FC<IProps> = ({ children }) => (
  <div className={classes.container}>{children}</div>
)

export default ArticleWrapper

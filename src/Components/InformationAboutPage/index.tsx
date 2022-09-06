import React from 'react'

import classes from './InformationAboutPage.module.sass'

interface IProps {
  children: React.ReactNode
}

const InformationAboutPage: React.FC<IProps> = ({ children }) => (
  <div className={classes.container}>{children}</div>
)

export default InformationAboutPage

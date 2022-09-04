import React from 'react'

import Vancouver from './images/vancouver-big.jpg'
import vancouverSM from './images/vancouver-small.jpg'
import ImageComponent from './ImageComponent'

import classes from './ImagePage.module.sass'

const ImagePage: React.FC = () => {
  return (
    <div>
      <p className={classes.text}>
        On the Image page, a lazy loading of an image of a huge size is carried out.
      </p>

      <ImageComponent src={Vancouver} placeholderSrc={vancouverSM} />
    </div>
  )
}

export default ImagePage

import React from 'react'

import { ImageComponent } from '../../entities'

import vancouverSM from './assets/vancouver-small.jpg'
import Vancouver from './assets/vancouver-big.jpg'

const Image: React.FC = () => {
  return <ImageComponent src={Vancouver} placeholderSrc={vancouverSM} />
}

export default Image

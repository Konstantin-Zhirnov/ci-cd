import React from 'react'

import Vancouver from './images/vancouver-big.jpg'
import vancouverSM from './images/vancouver-small.jpg'
import ImageComponent from './ImageComponent'

const ImagePage: React.FC = () => {
  return (
    <div>
      <ImageComponent src={Vancouver} placeholderSrc={vancouverSM} />
    </div>
  )
}

export default ImagePage

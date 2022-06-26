import React from 'react'

import Vancouver from './images/vancouver-big.jpg'
import vancouverSM from './images/vancouver-small.jpg'
import MyImage from './MyImage'

const LazyImagePage: React.FC = () => {
  return (
    <div>
      <MyImage src={Vancouver} placeholderSrc={vancouverSM} />
    </div>
  )
}

export default LazyImagePage

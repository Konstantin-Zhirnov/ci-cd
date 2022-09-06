import React from 'react'

import InformationAboutPage from '../../Components/InformationAboutPage'
import ImageComponent from './ImageComponent'

import vancouverSM from './images/vancouver-small.jpg'
import Vancouver from './images/vancouver-big.jpg'

const ImagePage: React.FC = () => {
  return (
    <div>
      <InformationAboutPage>
        <p>On the Image page, a lazy loading of an image of a huge size is carried out.</p>
      </InformationAboutPage>

      <ImageComponent src={Vancouver} placeholderSrc={vancouverSM} />
    </div>
  )
}

export default ImagePage

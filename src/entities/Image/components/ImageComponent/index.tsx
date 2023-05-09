import React from 'react'
import cn from 'classnames'
import Card from '@mui/material/Card'

import classes from './ImageComponent.module.sass'

interface IProps {
  src: string
  placeholderSrc: string
  width?: string
  alt?: string
}

const ImageComponent: React.FC<IProps> = React.memo(
  ({ src, placeholderSrc, width = '100%', alt, ...props }) => {
    const [imageSrc, setImageSrs] = React.useState(placeholderSrc)

    React.useEffect(() => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        setImageSrs(src)
      }
    }, [src])

    return (
      <Card className={classes.card}>
        <img
          src={imageSrc}
          alt={alt || ''}
          width={width}
          {...props}
          className={cn(classes.img, {
            [classes.loading]: imageSrc === placeholderSrc,
            [classes.loaded]: imageSrc !== placeholderSrc,
          })}
        />
      </Card>
    )
  },
)

export default ImageComponent

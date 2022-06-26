import React from 'react'

import cn from 'classnames'

import classes from './MyImage.module.sass'

interface IProps {
  src: string
  placeholderSrc: string
  width?: string
  alt?: string
}

const MyImage: React.FC<IProps> = ({ src, placeholderSrc, width = '100%', alt, ...props }) => {
  const [imageSrc, setImageSrs] = React.useState(placeholderSrc)

  React.useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setImageSrs(src)
    }
  }, [src])

  return (
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
  )
}

export default MyImage

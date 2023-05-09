import React, { useTransition } from 'react'
import cn from 'classnames'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { PostType } from '../../../types'

import classes from './PostsFilter.module.sass'

const filterBySearch = (entities: PostType[], search: string): PostType[] => {
  return entities?.filter((item) => item.title.concat(item.body).includes(search))
}

interface IProps {
  data: PostType[]
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>>
  isMobile: boolean
}

const PostsFilter: React.FC<IProps> = React.memo(({ data, setPosts, isMobile }) => {
  const [, startTransition] = useTransition()

  const [search, setSearch] = React.useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    startTransition(() => {
      setSearch(e.target.value)
    })
  }

  React.useEffect(() => {
    setPosts(filterBySearch(data, search))
  }, [search, setPosts, data])

  return (
    <div className={cn(classes.container, { [classes.mobile]: isMobile })}>
      <Typography>Posts filter:</Typography>
      <TextField
        id="search"
        variant="outlined"
        className={classes.input}
        autoComplete="off"
        onChange={handleSearch}
      />
    </div>
  )
})

export default PostsFilter

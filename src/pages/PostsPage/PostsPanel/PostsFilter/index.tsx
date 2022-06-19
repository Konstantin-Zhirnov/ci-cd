import React, { useTransition } from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { PostsType } from '../../../../types'

import classes from './PostsFilter.module.sass'

const filterBySearch = (entities: PostsType, search: string): PostsType => {
  return entities.filter((item) => item.title.concat(item.body).includes(search))
}

interface IProps {
  data: PostsType
  setPosts: React.Dispatch<React.SetStateAction<PostsType>>
}

const PostsFilter: React.FC<IProps> = ({ data, setPosts }) => {
  const [, startTransition] = useTransition()

  const [search, setSearch] = React.useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    startTransition(() => {
      setSearch(e.target.value)
    })
  }

  React.useEffect(() => {
    setPosts(filterBySearch(data, search))
  }, [search, setPosts])

  return (
    <div className={classes.container}>
      <Typography>Posts filter</Typography>
      <TextField
        id="search"
        variant="outlined"
        className={classes.input}
        autoComplete="off"
        onChange={handleSearch}
      />
    </div>
  )
}

export default PostsFilter

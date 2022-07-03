import React from 'react'

import { useGetPostsQuery } from '../../redux'
import { PostType } from '../../types/posts.type'

import AddPost from '../../Components/AddButton'
import PostsPanel from './PostsPanel'
import Posts from './Posts'

import classes from './PostsPage.module.sass'

const PostPage: React.FC = () => {
  const [count, setCount] = React.useState<string>('All')
  const [posts, setPosts] = React.useState<PostType[]>([])

  const { data } = useGetPostsQuery(count)

  React.useEffect(() => {
    setPosts(data)
  }, [data])

  return (
    <div className={classes.container}>
      <PostsPanel count={count} setCount={setCount} data={data} setPosts={setPosts} />

      <Posts posts={posts} />

      <AddPost />
    </div>
  )
}

export default PostPage

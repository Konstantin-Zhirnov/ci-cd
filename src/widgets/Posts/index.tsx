import React from 'react'

import { PostsPanel, PostsList, PostType, useGetPostsQuery } from '../../entities'

const Posts: React.FC = () => {
  const [count, setCount] = React.useState<string>('All')
  const [posts, setPosts] = React.useState<PostType[]>([])

  const { data } = useGetPostsQuery(count)

  React.useEffect(() => {
    setPosts(data)
  }, [data])

  return (
    <>
      <PostsPanel count={count} setCount={setCount} data={data} setPosts={setPosts} />

      <PostsList posts={posts} />
    </>
  )
}

export default Posts

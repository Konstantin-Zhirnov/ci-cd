import React, { useState } from 'react'

import { useGetPostsQuery } from '../../redux'
import { PostsType, TestDataType } from '../../types'

import AddPost from '../../Components/AddButton'
import PostsPanel from './PostsPanel'
import Posts from './Posts'

import classes from './PostsPage.module.sass'

interface IProps {
  testData?: TestDataType
}

const PostPage: React.FC<IProps> = ({ testData }) => {
  const [count, setCount] = useState<string>('All')
  const [posts, setPosts] = useState<PostsType>([])

  const { data } = useGetPostsQuery(count)

  React.useEffect(() => {
    setPosts(data)
  }, [data])

  return (
    <div className={classes.container}>
      <h1 data-testid={testData?.testId || 'article-name'}>{testData?.mockName || ''}</h1>

      <PostsPanel count={count} setCount={setCount} data={data} setPosts={setPosts} />

      <Posts posts={posts} />

      <AddPost />
    </div>
  )
}

export default PostPage

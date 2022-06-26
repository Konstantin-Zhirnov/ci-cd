import React from 'react'

import { TestDataType } from '../../types/global.type'
import { useGetPostsQuery } from '../../redux'
import { PostsType } from '../../types/posts.type'

import AddPost from '../../Components/AddButton'
import PostsPanel from './PostsPanel'
import Posts from './Posts'

import classes from './PostsPage.module.sass'

interface IProps {
  testData?: TestDataType
}

const PostPage: React.FC<IProps> = ({ testData }) => {
  const [count, setCount] = React.useState<string>('All')
  const [posts, setPosts] = React.useState<PostsType>([])

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

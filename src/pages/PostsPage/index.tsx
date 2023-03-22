import React from 'react'

import { useGetPostsQuery } from '../../redux'
import { PostType } from '../../types/posts.type'

import InformationAboutPage from '../../Components/InformationAboutPage'
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
      <InformationAboutPage>
        <p>
          The Posts page uses <strong>RTK QUERY</strong> with the ability to add and delete a post.
        </p>
        <p>
          Also on this page, a filter is implemented by the number of displayed posts and content.
        </p>
        <p>
          The <strong>«framer-motion»</strong> library is used to animate the display of posts.
        </p>
        <p>
          The server part for this application (REST API) was also written by me using{' '}
          <strong>Node.js</strong> and <strong>Express</strong>.
        </p>
      </InformationAboutPage>
      <PostsPanel count={count} setCount={setCount} data={data} setPosts={setPosts} />

      <Posts posts={posts} />

      <AddPost />
    </div>
  )
}

export default PostPage

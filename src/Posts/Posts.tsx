import React, { useState } from 'react';

import {TestDataType, PostType} from '../types'
import { useGetPostsQuery, useAddPostMutation, useDeletePostMutation } from '../redux'

    

interface IProps {
    testData?: TestDataType
}

const Todos: React.FC<IProps> = ({testData}) => {

  

  const [count, setCount] = useState<string>('')
  const { data, isLoading } = useGetPostsQuery(count);
  const [addPost, {isError}] = useAddPostMutation();
  const [ deletePost ] = useDeletePostMutation()

  console.log('data', data)
  console.log('count', count)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCount(e.target.value)
  }

  const handleAddPost = async () => {
      await addPost({
        id: 1,
        userId: 1,
        title: 'new post',
        body: 'My super new post'
      }).unwrap();
  }

  const handleDeletePost = (id: number) => async () => {
    await deletePost(id).unwrap();
}

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <h1
          data-testid={testData?.testId || 'article-name'}
        >
          {testData?.mockName || 'Posts'}
        </h1>

        <button onClick={handleAddPost}>Updatingd post</button>

        <div>
          <select value={count} onChange={handleChange}>
            <option value={''}>all</option>
            <option value={'1'}>1</option>
            <option value={'5'}>5</option>
            <option value={'10'}>10</option>
          </select>
        </div>

        <ul>
          {
            data.map((post: PostType) => (<li key={post.id} onClick={handleDeletePost(post.id)}><div><p>{post.title}</p><p>{post.body}</p></div></li>))
          }
        </ul>
    </div>
  );
}

export default Todos;

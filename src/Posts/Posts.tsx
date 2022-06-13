import React, { useState } from 'react';

import {TestDataType, PostType} from '../types'
import { useGetPostsQuery, useAddPostMutation } from '../redux'
import Post from './Post'

    

interface IProps {
    testData?: TestDataType
}

const Posts: React.FC<IProps> = ({testData}) => {

  const [count, setCount] = useState<string>('')
  const { data } = useGetPostsQuery(count);
  const [addPost] = useAddPostMutation();

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
            data?.map((post: PostType) => <Post key={post.id} post={post}/>)
          }
        </ul>
    </div>
  );
}

export default Posts;

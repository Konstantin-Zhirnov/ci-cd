import React from 'react';

import {PostType} from '../../types'
import { useDeletePostMutation } from '../../redux'

    

interface IProps {
    post: PostType;
}

const Post: React.FC<IProps> = ({post}) => {

  const [ deletePost ] = useDeletePostMutation()



  const handleDeletePost = (id: number) => async () => {
    await deletePost(id).unwrap();
}


  return (
<li key={post.id} onClick={handleDeletePost(post.id)}><div><p>{post.title}</p><p>{post.body}</p></div></li>

  );
}

export default Post;

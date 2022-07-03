import axios from 'axios'

import { apiConfig } from './index'

import { CommentType } from '../types/comments.type'

export const CommentsApi = {
  getComments(page: number): Promise<CommentType[]> {
    const url = `${apiConfig.comments}?_limit=20&_page=${page}`
    return axios.get(url).then(({ data }) => data)
  },
  getComment(id: string): Promise<CommentType> {
    const url = `${apiConfig.comments}/${id}`
    return axios.get(url).then(({ data }) => data)
  },
}

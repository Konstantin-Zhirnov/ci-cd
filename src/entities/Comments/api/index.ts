import axios from 'axios'

import { CommentType } from '../types'

const BaseURL = 'https://jsonplaceholder.typicode.com'

export const URL = {
  comments: BaseURL + '/comments',
}

export const CommentsApi = {
  getComments(page: number): Promise<CommentType[]> {
    const url = `${URL.comments}?_limit=20&_page=${page}`
    return axios.get(url).then(({ data }) => data)
  },
  getComment(id: string): Promise<CommentType> {
    const url = `${URL.comments}/${id}`
    return axios.get(url).then(({ data }) => data)
  },
}

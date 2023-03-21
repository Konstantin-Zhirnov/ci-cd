import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { PostType } from '../types/posts.type'
import { apiConfig } from '../api'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery(),
  endpoints: (build) => ({
    getPosts: build.query({
      query: (limit) => `${apiConfig.posts}${limit && limit !== 'All' ? `?limit=${limit}` : ''} `,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }: PostType) => ({ type: 'Posts', _id })),
              { type: 'Posts', id: 'LIST' },
            ]
          : [{ type: 'Posts', id: 'LIST' }],
    }),

    addPost: build.mutation({
      query: (body) => ({
        url: apiConfig.posts,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),

    deletePost: build.mutation({
      query: (id) => ({
        url: `${apiConfig.posts}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),
  }),
})

export const { useGetPostsQuery, useAddPostMutation, useDeletePostMutation } = postsApi

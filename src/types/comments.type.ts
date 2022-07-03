export type CommentsStateType = {
  comments: CommentType[]
  comment: CommentType | null
  message: string
  isCommentsLoading: boolean
  currentPage: number
  fetching: boolean
}

export type CommentType = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

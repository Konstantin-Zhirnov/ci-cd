export type PostType = {
  userId: number
  id: number
  title: string
  body: string
}

export type PostsType = PostType[]

export type TestDataType = Record<'testId' | 'mockName', string>
export type LinkType = Record<'name' | 'to', string>
export type FormInputsType = Record<'title' | 'text' | 'user', string>

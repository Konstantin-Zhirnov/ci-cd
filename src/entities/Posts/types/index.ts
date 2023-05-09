export type FormInputsType = Record<'title' | 'text' | 'user', string>

export type PostType = {
  userId: number
  _id: number
  title: string
  body: string
}

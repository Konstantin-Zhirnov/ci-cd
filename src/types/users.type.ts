export type UsersStateType = {
  users: UserType[]
  user: UserType | null
  message: string
  isLoading: boolean
  isCurrentUserLoading: boolean
}

type userAddressGeoType = Record<'lat' | 'lng', string>

type userAddressType = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: userAddressGeoType
}

type UserCompanyType = Record<'name' | 'catchPhrase' | 'bs', string>

export type UserType = {
  id: number
  name: string
  username: string
  email: string
  address: userAddressType
  phone: string
  website: string
  company: UserCompanyType
}

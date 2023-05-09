import client from './config/apollo/client'
export { client }

import { AppDispatch, RootState, store } from './config/redux/store'
export type { AppDispatch, RootState }
export { store }

import { useAppDispatch, useAppSelector } from './config/redux/hooks'
export { useAppDispatch, useAppSelector }

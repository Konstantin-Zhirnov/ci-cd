import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { AuthorizationApi } from '../../api/Authorization.api'
import { LoginType, RegistrationType } from '../../types/auth.type'

export const fetchLogin = createAsyncThunk(
  'authorization/fetchLogin',
  async function (obj: LoginType, { rejectWithValue }) {
    try {
      return await AuthorizationApi.login(obj.email, obj.password)
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data.message)
      } else {
        return rejectWithValue(error)
      }
    }
  },
)

export const fetchRegistration = createAsyncThunk(
  'authorization/fetchRegistration',
  async function (obj: RegistrationType, { rejectWithValue }) {
    try {
      return await AuthorizationApi.registration(obj.email, obj.password, obj.name)
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data.message)
      } else {
        return rejectWithValue(error)
      }
    }
  },
)

export const fetchLogout = createAsyncThunk(
  'authorization/fetchLogout',
  async function (_, { rejectWithValue }) {
    try {
      return await AuthorizationApi.logout()
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data.message)
      } else {
        return rejectWithValue(error)
      }
    }
  },
)

export const fetchCheckAuth = createAsyncThunk(
  'authorization/fetchCheckAuth',
  async function (_, { rejectWithValue }) {
    try {
      return await AuthorizationApi.checkAuth()
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      } else {
        return rejectWithValue(error)
      }
    }
  },
)

export const fetchActivationEmail = createAsyncThunk(
  'authorization/fetchActivationEmail',
  async function (link: string, { rejectWithValue }) {
    try {
      return await AuthorizationApi.activationEmail(link)
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      } else {
        return rejectWithValue(error)
      }
    }
  },
)

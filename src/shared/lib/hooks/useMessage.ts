import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useAppSelector } from '../../../app/config/redux/hooks'
import { getMessage } from '../../../features'

export const useMessage = () => {
  const message = useAppSelector(getMessage)
  React.useEffect(() => {
    if (message) {
      toast(message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        type: 'error',
      })
    }
  }, [message])
}

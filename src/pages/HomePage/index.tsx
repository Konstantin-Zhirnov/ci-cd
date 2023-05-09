import React from 'react'
import { useParams } from 'react-router-dom'

import { useAppDispatch } from '../../app'
import { fetchActivationEmail } from '../../features/Authorization/model/asyncActions'

import { HomeDescription, HomeCards } from '../../widgets'

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch()

  const { link } = useParams()

  React.useEffect(() => {
    if (link) {
      dispatch(fetchActivationEmail(link))
    }
  }, [link])

  return (
    <>
      <HomeDescription />

      <HomeCards />
    </>
  )
}

export default HomePage

import React from 'react'

import { CommentsDescription } from '../../widgets'
import { CommentsTable } from '../../entities'

const CommentsPage: React.FC = React.memo(() => {
  return (
    <>
      <CommentsDescription />

      <CommentsTable />
    </>
  )
})

export default CommentsPage

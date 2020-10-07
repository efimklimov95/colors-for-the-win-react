import React from 'react'
import Pagination from './Pagination'

const Content = ({ items }) => {
  return (
    <div className="content">
      <Pagination items={ items } />
    </div>
  )
}

export default Content
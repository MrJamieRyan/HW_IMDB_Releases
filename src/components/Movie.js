import React from 'react'

function Movie({ children, url }) {

  return (
    <li><a href={url}>{children}</a></li>
  )
}

export default Movie;
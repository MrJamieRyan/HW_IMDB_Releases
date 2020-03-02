import React, { Fragment } from 'react'
import Movie from './Movie'

function MoviesList({ movies }) {

  const movieComponent = movies.map(movie => {
    return (
      <Movie url={movie.url} key={movie.id}>
        {movie.name}
      </Movie>
    )
  })

  return (
    <Fragment>
      <h2>Upcoming film releases for UK</h2>
      {movieComponent}
      <p><a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases >></a></p>
    </Fragment>
  )
}

export default MoviesList;
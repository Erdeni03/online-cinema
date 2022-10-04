import MovieList from '@/screens/admin/movies/MovieList'

import { NextPageAuth } from '@/shared/types/auth.types'

const MovieListPage: NextPageAuth = () => {
  return (
    <div>
      <MovieList />
    </div>
  )
}

MovieListPage.isOnlyAdmin = true

export default MovieListPage

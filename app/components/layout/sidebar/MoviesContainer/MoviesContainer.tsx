import dynamic from 'next/dynamic'
import { FC } from 'react'

import PopularMovies from '@/components/layout/sidebar/MoviesContainer/PopularMovies'

const DynamicFavorites = dynamic(
  () => import('@/components/layout/sidebar/MoviesContainer/FavoriteMovies/FavoriteMovies'),
  {
    ssr: false,
  }
)
const MoviesContainer: FC = () => {
  return (
    <div>
      <PopularMovies />
      <DynamicFavorites />
    </div>
  )
}

export default MoviesContainer

import { FC } from 'react'

import { useFavorites } from '@/screens/favorites/useFavorites'

import NotAuthFavorites from '@/components/layout/sidebar/MoviesContainer/FavoriteMovies/NotAuthFavorites'
import MovieList from '@/components/layout/sidebar/MoviesContainer/MovieList'

import SkeletonLoader from '@/ui/SkeletonLoader'

import { useAuth } from '@/hooks/useAuth'

const FavoriteMovies: FC = () => {
  const { isLoading, favoritesMovies } = useFavorites()
  const { user } = useAuth()

  if (!user) return <NotAuthFavorites />

  return isLoading ? (
    <div className="mt-11">
      <SkeletonLoader count={3} className="h-28 mb-4" />
    </div>
  ) : (
    <MovieList link="/favorites" movies={favoritesMovies?.slice(0, 3) || []} title="Favorites" />
  )
}

export default FavoriteMovies

import { FC } from 'react'

import { useMovies } from '@/screens/admin/movies/useMovies'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const MovieList: FC = () => {
  const { handleSearch, isLoading, searchTerm, data, deleteAsync, createAsync } = useMovies()
  return (
    <Meta title="Movies">
      <AdminNavigation />
      <Heading title="Movies" />

      <AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} onClick={createAsync} />
      <AdminTable
        removeHandler={deleteAsync}
        isLoading={isLoading}
        headerItems={['Title', 'Genres', 'Rating']}
        tableItems={data || []}
      />
    </Meta>
  )
}

export default MovieList

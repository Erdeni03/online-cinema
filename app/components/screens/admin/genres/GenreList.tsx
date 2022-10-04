import { FC } from 'react'

import { useGenres } from '@/screens/admin/genres/useGenres'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const GenreList: FC = () => {
  const { handleSearch, isLoading, searchTerm, data, deleteAsync, createAsync } = useGenres()
  return (
    <Meta title="Genres">
      <AdminNavigation />
      <Heading title="Genres" />

      <AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} onClick={createAsync} />
      <AdminTable
        removeHandler={deleteAsync}
        isLoading={isLoading}
        headerItems={['Name', 'Slug']}
        tableItems={data || []}
      />
    </Meta>
  )
}

export default GenreList

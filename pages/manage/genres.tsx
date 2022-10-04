import GenreList from '@/screens/admin/genres/GenreList'

import { NextPageAuth } from '@/shared/types/auth.types'

const GenreListPage: NextPageAuth = () => {
  return (
    <div>
      <GenreList />
    </div>
  )
}

GenreListPage.isOnlyAdmin = true

export default GenreListPage

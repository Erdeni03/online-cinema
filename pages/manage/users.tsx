import UserList from '@/screens/admin/users/UserList'

import { NextPageAuth } from '@/shared/types/auth.types'

const UsersListPage: NextPageAuth = () => {
  return (
    <div>
      <UserList />
    </div>
  )
}

UsersListPage.isOnlyAdmin = true

export default UsersListPage

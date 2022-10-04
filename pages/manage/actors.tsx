import ActorList from '@/screens/admin/actors/ActorList'

import { NextPageAuth } from '@/shared/types/auth.types'

const ActorListPage: NextPageAuth = () => {
  return (
    <div>
      <ActorList />
    </div>
  )
}

ActorListPage.isOnlyAdmin = true

export default ActorListPage

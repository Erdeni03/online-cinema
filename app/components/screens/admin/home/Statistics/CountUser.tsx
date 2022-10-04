import cn from 'classnames'
import { FC } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/ui/SkeletonLoader'

import { AdminService } from '@/services/admin.service'

import s from '../Admin.module.scss'

const CountUser: FC = () => {
  const { isLoading, data: response } = useQuery('Count users', () => AdminService.getCountUsers())
  return (
    <div className={cn(s.block, s.countUsers)}>
      <div>
        {isLoading ? <SkeletonLoader /> : <div className={s.number}>{response?.data}</div>}
        <div className={s.description}>users</div>
      </div>
    </div>
  )
}

export default CountUser

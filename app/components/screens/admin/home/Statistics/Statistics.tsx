import { FC } from 'react'

import CountUser from '@/screens/admin/home/Statistics/CountUser'
import PopularMovie from '@/screens/admin/home/Statistics/PopularMovie'

import s from '../Admin.module.scss'

const Statistics: FC = () => {
  return (
    <div className={s.statistics}>
      <CountUser />
      <PopularMovie />
    </div>
  )
}

export default Statistics

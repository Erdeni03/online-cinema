import dynamic from 'next/dynamic'
import { FC } from 'react'

import MenuItem from '@/components/layout/navigation/MenuContainer/MenuItem'
import { IMenu } from '@/components/layout/navigation/MenuContainer/menu.interface'

import s from './Menu.module.scss'

const DynamicAuthItems = dynamic(() => import('./auth/AuthItems'), {
  ssr: false,
})

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
  return (
    <div className={s.menu}>
      <div className={s.heading}>{title}</div>
      <ul className={s.ul}>
        {items.map((item) => (
          <MenuItem item={item} key={item.link} />
        ))}
        {title === 'General' ? <DynamicAuthItems /> : null}
      </ul>
    </div>
  )
}

export default Menu

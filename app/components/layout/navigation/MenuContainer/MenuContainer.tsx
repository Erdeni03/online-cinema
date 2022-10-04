import { FC } from 'react'

import Menu from '@/components/layout/navigation/MenuContainer/Menu'
import GenreMenu from '@/components/layout/navigation/MenuContainer/genres/GenreMenu'
import { firstMenu, userMenu } from '@/components/layout/navigation/MenuContainer/menu.data'

const MenuContainer: FC = () => {
  return (
    <div>
      <Menu menu={firstMenu} />
      <GenreMenu />
      <Menu menu={userMenu} />
    </div>
  )
}

export default MenuContainer

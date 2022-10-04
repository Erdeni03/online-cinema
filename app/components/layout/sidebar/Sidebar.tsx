import MoviesContainer from '@/components/layout/sidebar/MoviesContainer/MoviesContainer'
import Search from '@/components/layout/sidebar/Search/Search'

import s from './Sidebar.module.scss'

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <Search />
      <MoviesContainer />
    </div>
  )
}

export default Sidebar

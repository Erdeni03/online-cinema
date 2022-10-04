import { FC } from 'react'

import SearchList from '@/components/layout/sidebar/Search/SearchList/SearchList'
import { useSearch } from '@/components/layout/sidebar/Search/useSearch'

import SearchField from '@/ui/search-field/SearchField'

import s from './Search.module.scss'

const Search: FC = () => {
	const { isSuccess, data, handleSearch, searchTerm } = useSearch()
	return (
		<div className={s.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	)
}

export default Search

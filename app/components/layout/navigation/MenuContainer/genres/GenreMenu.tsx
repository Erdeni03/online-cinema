import { FC } from 'react'

import Menu from '@/components/layout/navigation/MenuContainer/Menu'
import { usePopularGenres } from '@/components/layout/navigation/MenuContainer/genres/usePopularGenres'

import SkeletonLoader from '@/ui/SkeletonLoader'

const GenreMenu: FC = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<div className="mx-11 mb-6">
			<SkeletonLoader className="h-7 mt-6" count={5} />
		</div>
	) : (
		<Menu menu={{ title: 'Popular genres', items: data || [] }} />
	)
}

export default GenreMenu

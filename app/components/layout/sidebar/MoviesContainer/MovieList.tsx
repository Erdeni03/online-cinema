import Link from 'next/link'
import { FC } from 'react'

import MovieItem from '@/components/layout/sidebar/MoviesContainer/MovieItem'
import { IMovieList } from '@/components/layout/sidebar/MoviesContainer/movie-list.interface'

import s from './MovieList.module.scss'

const MovieList: FC<IMovieList> = ({ link, title, movies }) => {
	return (
		<div className={s.list}>
			<div className={s.heading}>{title}</div>
			{movies.map((movie) => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link href={link}>
				<a className={s.button}>See more</a>
			</Link>
		</div>
	)
}

export default MovieList

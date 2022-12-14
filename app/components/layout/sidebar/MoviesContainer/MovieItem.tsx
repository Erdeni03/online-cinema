import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import MaterialIcon from '@/ui/MaterialIcon'

import { IMovie } from '@/shared/types/movie.types'

import { getGenresListEach } from '@/utils/movie/getGenresList'

import s from './MovieList.module.scss'
import { getGenreUrl, getMovieUrl } from '@/config/url.config'

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={s.item}>
			<Link href={getMovieUrl(movie.slug)}>
				<a>
					<Image
						src={movie.poster}
						width={65}
						height={97}
						alt={movie.title}
						draggable={false}
						priority
					/>
				</a>
			</Link>
			<div className={s.info}>
				<div>
					<div className={s.title}>{movie.title}</div>
					<div className={s.genres}>
						{movie.genres.map((genre, idx) => (
							<Link key={genre._id} href={getGenreUrl(genre.slug)}>
								<a>{getGenresListEach(idx, movie.genres.length, genre.name)}</a>
							</Link>
						))}
					</div>
				</div>
				<div className={s.rating}>
					<MaterialIcon name={'MdStarRate'} />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem

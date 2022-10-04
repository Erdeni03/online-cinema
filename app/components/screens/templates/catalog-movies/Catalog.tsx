import { FC } from 'react'

import { ICatalog } from '@/screens/templates/catalog-movies/catalog.types'

import GalleryItem from '@/ui/gallery/GalleryItem'
import Description from '@/ui/heading/Description'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import styles from './Catalog.module.scss'
import { getMovieUrl } from '@/config/url.config'

const Catalog: FC<ICatalog> = ({ title, description, movies }) => {
  return (
    <Meta title={title} description={description}>
      <Heading title={title} className={styles.heading} />
      {description && <Description text={description} className={styles.description} />}

      <section className={styles.movies}>
        {movies.map((movie) => (
          <GalleryItem
            key={movie._id}
            variant="horizontal"
            item={{
              name: movie.title,
              posterPath: movie.bigPoster,
              link: getMovieUrl(movie.slug),
              content: {
                title: movie.title,
              },
            }}
          />
        ))}
      </section>

      {/* <div className="text-center">
				<button className={styles.button}>Load more</button>
			</div> */}
    </Meta>
  )
}

export default Catalog

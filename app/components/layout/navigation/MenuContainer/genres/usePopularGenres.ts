import { useQuery } from 'react-query'

import { IMenuItem } from '@/components/layout/navigation/MenuContainer/menu.interface'

import { GenreService } from '@/services/genre.service'

import { getGenreUrl } from '@/config/url.config'

export const usePopularGenres = () => {
  return useQuery('popular genre menu', () => GenreService.getAll(), {
    select: ({ data }) =>
      data
        .filter((genre) => genre.icon)
        .map(
          (genre) =>
            ({
              icon: genre.icon,
              link: getGenreUrl(genre.slug),
              title: genre.name,
            } as IMenuItem)
        )
        .splice(0, 4),
    onError(error) {
      // errors
    },
  })
}

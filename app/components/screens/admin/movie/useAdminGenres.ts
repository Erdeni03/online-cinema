import { useQuery } from 'react-query'

import { IOption } from '@/ui/select/select.interface'

import { GenreService } from '@/services/genre.service'

import { toastError } from '@/utils/toast-error'

export const useAdminGenres = () => {
  return useQuery('List of genre', () => GenreService.getAll(), {
    select: ({ data }) =>
      data.map(
        (genre): IOption => ({
          label: genre.name,
          value: genre._id,
        })
      ),
    onError: (e) => {
      toastError(e, 'Genre list')
    },
  })
}

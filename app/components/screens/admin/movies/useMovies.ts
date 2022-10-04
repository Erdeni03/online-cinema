import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { MovieService } from '@/services/movie.service'

import { getGenresList } from '@/utils/movie/getGenresList'
import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '@/config/url.config'

export const useMovies = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce<string>(searchTerm, 500)

  const queryData = useQuery(
    ['movie list', debouncedSearch],
    () => MovieService.getAll(debouncedSearch),
    {
      select: ({ data }) =>
        data.map(
          (movie): ITableItem => ({
            _id: movie._id,
            editUrl: getAdminUrl(`movie/edit/${movie._id}`),
            items: [movie.title, getGenresList(movie.genres), String(movie.rating)],
          })
        ),
      onError: (e) => {
        toastError(e, 'Movie list')
      },
    }
  )
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const { mutateAsync: deleteAsync } = useMutation(
    'delete movie',
    (userId: string) => MovieService.deleteMovie(userId),
    {
      onError: (e) => {
        toastError(e, 'Delete movie')
      },
      onSuccess: () => {
        toastr.success('Delete movie', 'delete was succesfull')
        queryData.refetch()
      },
    }
  )
  const { push } = useRouter()

  const { mutateAsync: createAsync } = useMutation('create movie', () => MovieService.create(), {
    onError: (e) => {
      toastError(e, 'Create movie')
    },
    onSuccess: ({ data: _id }) => {
      toastr.success('Create movie', 'create was succesfull')
      push(getAdminUrl(`movie/edit/${_id}`))
    },
  })

  return useMemo(
    () => ({
      handleSearch,
      ...queryData,
      searchTerm,
      deleteAsync,
      createAsync,
    }),
    [queryData, searchTerm, deleteAsync, createAsync]
  )
}

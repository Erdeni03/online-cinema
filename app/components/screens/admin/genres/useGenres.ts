import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { GenreService } from '@/services/genre.service'

import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '@/config/url.config'

export const useGenres = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce<string>(searchTerm, 500)

  const queryData = useQuery(
    ['genre list', debouncedSearch],
    () => GenreService.getAll(debouncedSearch),
    {
      select: ({ data }) =>
        data.map(
          (genre): ITableItem => ({
            _id: genre._id,
            editUrl: getAdminUrl(`genre/edit/${genre._id}`),
            items: [genre.name, genre.slug],
          })
        ),
      onError: (e) => {
        toastError(e, 'Genre list')
      },
    }
  )
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const { mutateAsync: deleteAsync } = useMutation(
    'genre user',
    (userId: string) => GenreService.delete(userId),
    {
      onError: (e) => {
        toastError(e, 'Delete genre')
      },
      onSuccess: () => {
        toastr.success('Delete genre', 'delete was succesfull')
        queryData.refetch()
      },
    }
  )

  const { push } = useRouter()

  const { mutateAsync: createAsync } = useMutation('create genre', () => GenreService.create(), {
    onError: (e) => {
      toastError(e, 'Create genre')
    },
    onSuccess: ({ data: _id }) => {
      toastr.success('Create genre', 'create was succesfull')
      push(getAdminUrl(`genre/edit/${_id}`))
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

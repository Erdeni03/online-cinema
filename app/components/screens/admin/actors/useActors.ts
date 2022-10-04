import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { ActorService } from '@/services/actor.service'

import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '@/config/url.config'

export const useActors = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce<string>(searchTerm, 500)

  const queryData = useQuery(
    ['actor list', debouncedSearch],
    () => ActorService.getAll(debouncedSearch),
    {
      select: ({ data }) =>
        data.map(
          (actor): ITableItem => ({
            _id: actor._id,
            editUrl: getAdminUrl(`actor/edit/${actor._id}`),
            items: [actor.name, String(actor.countMovies)],
          })
        ),
      onError: (e) => {
        toastError(e, 'Actor list')
      },
    }
  )
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const { mutateAsync: deleteAsync } = useMutation(
    'delete actor',
    (actorId: string) => ActorService.deleteActor(actorId),
    {
      onError: (e) => {
        toastError(e, 'Delete actor')
      },
      onSuccess: () => {
        toastr.success('Delete actor', 'delete was succesfull')
        queryData.refetch()
      },
    }
  )

  const { push } = useRouter()

  const { mutateAsync: createAsync } = useMutation('create actor', () => ActorService.create(), {
    onError: (e) => {
      toastError(e, 'Create actor')
    },
    onSuccess: ({ data: _id }) => {
      toastr.success('Create actor', 'create was succesfull')
      push(getAdminUrl(`actor/edit/${_id}`))
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

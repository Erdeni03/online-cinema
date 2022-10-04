import { useQuery } from 'react-query'

import { IOption } from '@/ui/select/select.interface'

import { ActorService } from '@/services/actor.service'

import { toastError } from '@/utils/toast-error'

export const useAdminActors = () => {
  return useQuery('List of actor', () => ActorService.getAll(), {
    select: ({ data }) =>
      data.map(
        (actor): IOption => ({
          label: actor.name,
          value: actor._id,
        })
      ),
    onError: (e) => {
      toastError(e, 'Actor list')
    },
  })
}

import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IMovieEditInput } from '@/screens/admin/movie/movie-edit.interface'

import { MovieService } from '@/services/movie.service'

import { getKeys } from '@/utils/object/getKeys'
import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '@/config/url.config'

export const useMovieEdit = (setValue: UseFormSetValue<IMovieEditInput>) => {
  const { push, query } = useRouter()

  const movieId = String(query.id)

  const { isLoading } = useQuery(['movie', movieId], () => MovieService.getById(movieId), {
    onSuccess: ({ data }) => {
      getKeys(data).forEach((key) => {
        setValue(key, data[key])
      })
    },
    onError: (e) => {
      toastError(e, 'Get movie')
    },
    enabled: !!query.id,
  })

  const { mutateAsync } = useMutation(
    'update genre',
    (data: IMovieEditInput) => MovieService.update(movieId, data),
    {
      onError: (e) => {
        toastError(e, 'Update movie')
      },
      onSuccess: () => {
        toastr.success('Update movie', 'update was succesfull')
        push(getAdminUrl('movies'))
      },
    }
  )

  const onSubmit: SubmitHandler<IMovieEditInput> = async (data) => {
    await mutateAsync(data)
  }
  return { onSubmit, isLoading }
}

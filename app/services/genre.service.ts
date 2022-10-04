import { IGenreEditInput } from '@/screens/admin/genre/genre-edit.interface'
import { ICollection } from '@/screens/collections/collections.interface'

import { IGenre } from '@/shared/types/movie.types'

import { instance as axios, axiosClassic } from '../api/interceptors'

import { getGenresUrl } from '@/config/api.config'

export const GenreService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
      params: searchTerm ? { searchTerm } : {},
    })
  },

  async delete(_id: string) {
    return axios.delete<string>(getGenresUrl(`/${_id}`))
  },

  async getById(_id: string) {
    return axios.get<IGenreEditInput>(getGenresUrl(`/${_id}`))
  },

  async getBySlug(slug: string) {
    return axiosClassic.get<IGenre>(getGenresUrl(`/by-slug/${slug}`))
  },

  async update(_id: string, data: IGenreEditInput) {
    return axios.put<string>(getGenresUrl(`/${_id}`), data)
  },
  async create() {
    return axios.post<string>(getGenresUrl('/'))
  },

  async getCollections() {
    return axiosClassic.get<ICollection[]>(getGenresUrl('/collections'))
  },
}

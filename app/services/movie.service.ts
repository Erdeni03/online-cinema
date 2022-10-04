import { IMovieEditInput } from '@/screens/admin/movie/movie-edit.interface'

import { IMovie } from '@/shared/types/movie.types'

import { instance as axios, axiosClassic } from '../api/interceptors'

import { getMoviesUrl } from '@/config/api.config'

export const MovieService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
      params: searchTerm ? { searchTerm } : {},
    })
  },

  async getMostPopularMovies() {
    const { data: movies } = await axiosClassic.get<IMovie[]>(getMoviesUrl('/most-popular'))
    return movies
  },

  async deleteMovie(_id: string) {
    return axios.delete<string>(getMoviesUrl(`/${_id}`))
  },

  async getByGenres(genreIds: string[]) {
    return axiosClassic.post<IMovie[]>(getMoviesUrl('/by-genres'), { genreIds })
  },

  async getByActor(actorId: string) {
    return axiosClassic.get<IMovie[]>(getMoviesUrl(`/by-actor/${actorId}`))
  },

  async create() {
    return axios.post<string>(getMoviesUrl('/'))
  },

  async update(_id: string, data: IMovieEditInput) {
    return axios.put<string>(getMoviesUrl(`/${_id}`), data)
  },

  async getById(_id: string) {
    return axios.get<IMovieEditInput>(getMoviesUrl(`/${_id}`))
  },

  async getBySlug(slug: string) {
    return axiosClassic.get<IMovie>(getMoviesUrl(`/by-slug/${slug}`))
  },

  async updateCountOpened(slug: string) {
    return axiosClassic.post(getMoviesUrl('/update-count-opened'), {
      slug,
    })
  },
}

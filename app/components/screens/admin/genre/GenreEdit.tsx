import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'

import { IGenreEditInput } from '@/screens/admin/genre/genre-edit.interface'
import { useGenreEdit } from '@/screens/admin/genre/useGenreEdit'

import SkeletonLoader from '@/ui/SkeletonLoader'
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Button from '@/ui/form-elements/Button'
import Field from '@/ui/form-elements/Field'
import SlugField from '@/ui/form-elements/SlugField/SlugField'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'
import { generateSlug } from '@/utils/string/generateSlug'

import s from '../../../ui/form-elements/admin-form.module.scss'

const DynamicTextEditor = dynamic(() => import('@/components/ui/form-elements/TextEditor'), {
  ssr: false,
})

const GenreEdit: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
    control,
  } = useForm<IGenreEditInput>({
    mode: 'onChange',
  })

  const { onSubmit, isLoading } = useGenreEdit(setValue)

  return (
    <Meta title="Edit genre">
      <AdminNavigation />
      <Heading title="Edit genre" />
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        {isLoading ? (
          <SkeletonLoader count={3} />
        ) : (
          <>
            <div className={s.fields}>
              <Field
                {...register('name', {
                  required: 'Name is required',
                })}
                placeholder="Name"
                error={errors.name}
                style={{ width: '31%' }}
              />
              <div style={{ width: '31%' }}>
                <SlugField
                  register={register}
                  error={errors.slug}
                  generate={() => setValue('slug', generateSlug(getValues('name')))}
                />
              </div>
              <Field
                {...register('icon', {
                  required: 'Icon is required',
                })}
                placeholder="Icon"
                error={errors.icon}
                style={{ width: '31%' }}
              />
            </div>
            <Controller
              control={control}
              name="description"
              defaultValue=""
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <DynamicTextEditor
                  onChange={onChange}
                  value={value}
                  error={error}
                  placeholder="Description"
                />
              )}
              rules={{
                validate: {
                  required: (v) =>
                    (v && stripHtml(v).result.length > 0) || 'Description is required',
                },
              }}
            />
            {/*<TextEditor />*/}
            <Button>Update</Button>
          </>
        )}
      </form>
    </Meta>
  )
}

export default GenreEdit

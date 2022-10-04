import { FC } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

import Field from '@/ui/form-elements/Field'

import s from './SlugField.module.scss'

interface ISlugField {
  error?: FieldError
  register: UseFormRegister<any>
  generate: () => void
}

const SlugField: FC<ISlugField> = ({ generate, error, register }) => {
  return (
    <div className="relative">
      <Field
        {...register('slug', {
          required: 'Slug is required',
        })}
        placeholder="Slug"
        error={error}
      />
      <div className={s.badge} onClick={generate}>
        generate
      </div>
    </div>
  )
}

export default SlugField

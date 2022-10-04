import cn from 'classnames'
import { forwardRef } from 'react'

import { IField } from '@/ui/form-elements/form.interface'

import s from './form.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={cn(s.common, s.field)} style={style}>
				<label>
					<span>{placeholder}</span>
					<input ref={ref} type={type} {...rest} />
					{error && <div className={s.error}>{error.message}</div>}
				</label>
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field

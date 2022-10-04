import cn from 'classnames'
import { FC } from 'react'

import { IButton } from '@/ui/form-elements/form.interface'

import s from './form.module.scss'

const Button: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button className={cn(s.button, className)} {...rest}>
			{children}
		</button>
	)
}

export default Button

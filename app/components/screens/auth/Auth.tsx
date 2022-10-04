import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import AuthFields from '@/screens/auth/AuthFields'
import { IAuthInput } from '@/screens/auth/auth.interface'
import { useAuthRedirect } from '@/screens/auth/useAuthRedirect'

import Button from '@/ui/form-elements/Button'
import Heading from '@/ui/heading/Heading'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import Meta from '@/utils/meta/Meta'

import s from './Auth.module.scss'

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})

	const { login, register } = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)

		reset()
	}
	return (
		<Meta title="Auth">
			<section className={s.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Auth" className="mb-6" />
					<AuthFields register={registerInput} formState={formState} isPasswordRequired />
					<div className={s.buttons}>
						<Button
							type="submit"
							onClick={() => setType('login')}
							disabled={isLoading}
							className={'mb-5'}
						>
							Login
						</Button>
						<Button
							type="submit"
							onClick={() => setType('register')}
							disabled={isLoading}
							className={'mb-5'}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth

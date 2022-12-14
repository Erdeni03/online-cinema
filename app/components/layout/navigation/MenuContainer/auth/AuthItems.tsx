import { FC } from 'react'

import MenuItem from '@/components/layout/navigation/MenuContainer/MenuItem'
import LogoutButton from '@/components/layout/navigation/MenuContainer/auth/LogoutButton'

import { useAuth } from '@/hooks/useAuth'

import { getAdminHomeUrl } from '@/config/url.config'

const AuthItems: FC = () => {
	const { user } = useAuth()

	return (
		<>
			{user ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Profile',
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem item={{ icon: 'MdLogin', link: '/auth', title: 'Login' }} />
			)}

			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: getAdminHomeUrl(''),
						title: 'Admin panel',
					}}
				/>
			)}
		</>
	)
}

export default AuthItems

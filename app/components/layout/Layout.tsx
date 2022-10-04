import { FC, ReactNode } from 'react'

import Navigation from '@/components/layout/navigation/Navigation'
import Sidebar from '@/components/layout/sidebar/Sidebar'

import s from './Layout.module.scss'

interface BaseLayoutProps {
	children?: ReactNode
}

const Layout: FC<BaseLayoutProps> = ({ children }) => {
	return (
		<div className={s.layout}>
			<Navigation />
			<div className={s.center}>{children}</div>
			<Sidebar />
		</div>
	)
}

export default Layout

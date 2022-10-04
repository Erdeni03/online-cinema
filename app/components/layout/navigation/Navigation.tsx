import s from './Navigation.module.scss'
import Logo from "@/components/layout/navigation/Logo";
import MenuContainer from "@/components/layout/navigation/MenuContainer/MenuContainer";

const Navigation = () => {
	return <div className={s.navigation}>
		<Logo/>
		<MenuContainer/>
	</div>
}

export default Navigation

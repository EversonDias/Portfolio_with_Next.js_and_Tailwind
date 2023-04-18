import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import Switch from 'react-switch';
import ThemeContext from '../../context/theme/Context';
import dark from '../../style/theme/dark';
import light from '../../style/theme/light';

export default function NavBar() {
	const {type, toggleTheme} = useContext(ThemeContext);
	return (
		<nav>
			<Link to='/projects' className='LinksHeader'>Projetos</Link>
			<Link to='/about' className='LinksHeader'>Sobre</Link>
			<Switch
				data-testid='toggle-theme'
				onChange={toggleTheme}
				checked={type}
				checkedIcon
				uncheckedIcon
				height={10}
				width={40}
				handleDiameter={20}
				onColor={dark.color.highlights}
				offColor={light.color.highlights}
			/>
		</nav>
	);
}

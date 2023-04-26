import React from 'react';
import {Link} from 'react-router-dom';
import Switch from 'react-switch';
import PropTypes from 'prop-types';
import dark from '../../style/theme/dark';
import light from '../../style/theme/light';

export default function NavBar({toggleTheme, type}) {
	return (
		<nav className='navBar'>
			<Link to='/projects' className='LinksHeader'>Projetos</Link>
			<Link to='/about' className='LinksHeader'>Sobre</Link>
			<Switch
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

NavBar.propTypes = {
	toggleTheme: PropTypes.func.isRequired,
	type: PropTypes.bool.isRequired,
};

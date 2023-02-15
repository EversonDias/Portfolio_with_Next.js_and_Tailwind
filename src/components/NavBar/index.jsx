import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Switch from 'react-switch';
import PropTypes from 'prop-types';
import dark from '../../style/theme/dark';
import light from '../../style/theme/light';

export default class NavBar extends Component {
	render() {
		const {toggleTheme, type} = this.props;
		return (
			<nav>
				<Link to='/projects'>Projetos</Link>
				<Link to='/about'>Sobre</Link>
				<Switch
					onChange={toggleTheme}
					checked={type === 'dark'}
					checkedIcon
					uncheckedIcon
					height={10}
					width={40}
					handleDiameter={20}
					offColor={dark.color.emphasis}
					onColor={light.color.emphasis}
				/>
			</nav>
		);
	}
}

NavBar.propTypes = {
	toggleTheme: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
};

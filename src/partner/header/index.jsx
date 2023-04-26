import React, {useContext} from 'react';
import Container from './styles';
import Logo from '../../components/Logo';
import NavBar from '../../components/NavBar';
import PropTypes from 'prop-types';
import Menu from '../../components/menuHamburger';
import {Link} from 'react-router-dom';
import MyContext from '../../context/MyContext';

export default function Header({toggleTheme, type}) {
	const {handleOnClickMenu, menu} = useContext(MyContext);
	return (
		<Container>
			<label onClick={menu ? handleOnClickMenu : null} className='logo'>
				<Link to='/' data-testid='logo-test'>
					<Logo type={type}/>
				</Link>
			</label>
			<NavBar
				type={type}
				toggleTheme={toggleTheme}
			/>
			<Menu
				type={type}
				toggleTheme={toggleTheme}
			/>
		</Container>
	);
}

Header.propTypes = {
	toggleTheme: PropTypes.func.isRequired,
	type: PropTypes.bool.isRequired,
};

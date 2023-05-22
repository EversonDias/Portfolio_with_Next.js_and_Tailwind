import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import Switch from 'react-switch';
import dark from '../../style/theme/dark';
import light from '../../style/theme/light';
import PropTypes from 'prop-types';
import MyContext from '../../context/MyContext';
import Container from './style';

function ListMenu({toggleTheme, type}) {
	const {handleOnClickMenu, menu} = useContext(MyContext);
	return (
		<Container>
			<div className={menu ? 'listMenu listMenuOn' : 'listMenu listMenuOff'} >
				<button onClick={handleOnClickMenu}>
					<Link to='/' className='LinksHeader'>Home</Link>
				</button>
				<button onClick={handleOnClickMenu}>
					<Link to='/projects' className='LinksHeader'>Projetos</Link>
				</button>
				<button onClick={handleOnClickMenu}>
					<Link to='/about' className='LinksHeader'>Sobre</Link>
				</button>
				<div className='toggle'>
					<p>Tema</p>
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
				</div>
			</div>
		</Container>
	);
}

export default ListMenu;

ListMenu.propTypes = {
	toggleTheme: PropTypes.func.isRequired,
	type: PropTypes.bool.isRequired,
};


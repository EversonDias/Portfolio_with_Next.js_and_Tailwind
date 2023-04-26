import React, {useContext} from 'react';
import MyContext from '../../context/MyContext';
import Container from './style';

function Menu() {
	const {handleOnClickMenu, menu} = useContext(MyContext);
	return (
		<Container >
			<label onClick={handleOnClickMenu} className='hamburgerLine'>
				{
					menu
						? [...Array(3)].map((_props, index) => (
							<span key={index} className={`line line${index + 1} line${index + 1}Move`}></span>
						)) : [...Array(3)].map((_props, index) => (
							<span key={index} className={`line line${index + 1}`}></span>
						))
				}
			</label>
		</Container>
	);
}

export default Menu;

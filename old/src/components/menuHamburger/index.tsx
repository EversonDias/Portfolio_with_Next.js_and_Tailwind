import React from 'react';
import Container from './style';

function Menu() {
	const menu = true;
	return (
		<Container >
			<label onClick={() => {}} className='hamburgerLine'>
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

import React from 'react';
import Container from './styles';
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';
import {useContext} from 'react';
import MyContext from '../../context/MyContext';

export default function Footer() {
	const {menu} = useContext(MyContext);
	return (
		<div>
			{
				!menu && (
					<Container>
						<a href='https://www.linkedin.com/in/eversondiasdev/' target='_blank' rel='noreferrer'>
							<BsLinkedin className='icons'/>
						</a>
						<a href='https://github.com/EversonDias' target='_blank' rel='noreferrer'>
							<BsGithub className='icons'/>
						</a>
						<a href='https://www.instagram.com/eversondiasdev/' target='_blank' rel='noreferrer'>
							<BsInstagram className='icons'/>
						</a>
					</Container>
				)
			}
		</div>
	);
}

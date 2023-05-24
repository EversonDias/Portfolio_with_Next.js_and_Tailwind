import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';


export default function Footer() {
	return (
		<div>
					<div>
						<a href='https://www.linkedin.com/in/eversondiasdev/' target='_blank' rel='noreferrer'>
							<BsLinkedin className='icons'/>
						</a>
						<a href='https://github.com/EversonDias' target='_blank' rel='noreferrer'>
							<BsGithub className='icons'/>
						</a>
						<a href='https://www.instagram.com/eversondiasdev/' target='_blank' rel='noreferrer'>
							<BsInstagram className='icons'/>
						</a>
					</div>
		</div>
	);
}

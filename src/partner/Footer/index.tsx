import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';


export default function Footer() {
	return (
		<div className='h-[10vh] bg-primary flex justify-center items-center'>
			<div className='flex gap-3'>
				<a href='https://www.linkedin.com/in/eversondiasdev/' target='_blank' rel='noreferrer'>
					<BsLinkedin className='text-3xl hover:text-highlights'/>
				</a>
				<a href='https://github.com/EversonDias' target='_blank' rel='noreferrer'>
					<BsGithub className='text-3xl hover:text-highlights'/>
				</a>
				<a href='https://www.instagram.com/eversondiasdev/' target='_blank' rel='noreferrer'>
					<BsInstagram className='text-3xl hover:text-highlights'/>
				</a>
			</div>
		</div>
	);
}

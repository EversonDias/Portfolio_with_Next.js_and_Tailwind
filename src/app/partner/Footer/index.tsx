import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';


export default function Footer() {
	return (
		<div className='h-[10vh] bg-primary flex justify-center items-center'>
			<div className='flex gap-3'>
				<a aria-label='link que direciona para Linkedin do Everson' href='https://www.linkedin.com/in/eversondiasdev/' target='_blank' rel='noreferrer'>
					<BsLinkedin className='text-3xl hover:text-highlights duration-500' />
				</a>
				<a aria-label='link que direciona para GitHub do Everson' href='https://github.com/EversonDias' target='_blank' rel='noreferrer'>
					<BsGithub className='text-3xl hover:text-highlights duration-500' />
				</a>
				<a aria-label='link que direciona para Instagram do Everson' href='https://www.instagram.com/eversondiasdev/' target='_blank' rel='noreferrer'>
					<BsInstagram className='text-3xl hover:text-highlights duration-500' />
				</a>
			</div>
		</div>
	);
}

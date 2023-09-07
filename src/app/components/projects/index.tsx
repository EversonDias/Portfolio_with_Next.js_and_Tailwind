"use client"
import { useContext } from 'react';
import CardProject from '../../components/CardProject';
import { ProjectContext } from '../../contexts/ProjectContext/context';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import DescriptionProject from '../DescriptionProject';

export default function Projects() {
	const { projects } = useContext(ProjectContext);

		return (
		<div id="PROJETO">
			<div className='text-center pt-14 md:p-20'>
				<p className='text-2xl p-4 hoverUnderline md:text-5xl md:font-bold md:p-5'>PROJETOS</p>
			</div>
			
			<div className='md:hidden'>
				<Swiper
				spaceBetween={1}
							navigation={false}
							pagination={{ clickable: true }}
							scrollbar={{ draggable: true }}
				slidesPerView={1}
				className='mb-12'
						>
						{projects.map(({ name, language, id, description, homepage, topics }, index: number) => (
							<SwiperSlide
								key={id}
							>
									<CardProject
										id={id}
										name={name}
										description={description}
										language={language}
										homepage={homepage}
										topics={topics}
										index={index}
									/>
							</SwiperSlide>
						))}
					</Swiper>
			</div>

			<div className='hidden md:block lg:hidden'>
				<Swiper
				spaceBetween={1}
							navigation={false}
							pagination={{ clickable: true }}
							scrollbar={{ draggable: true }}
				slidesPerView={2}
				className='mb-12'
						>
						{projects.map(({ name, language, id, description, homepage, topics }, index: number) => (
							<SwiperSlide
								key={id}
							>
									<CardProject
										id={id}
										name={name}
										description={description}
										language={language}
										homepage={homepage}
										topics={topics}
										index={index}
									/>
							</SwiperSlide>
						))}
					</Swiper>
			</div>

			<div className='hidden lg:block 2xl:hidden'>
				<Swiper
				spaceBetween={1}
							navigation={false}
							pagination={{ clickable: true }}
							scrollbar={{ draggable: true }}
				slidesPerView={3}
				className='mb-12'
						>
						{projects.map(({ name, language, id, description, homepage, topics }, index: number) => (
							<SwiperSlide
								key={id}
							>
									<CardProject
										id={id}
										name={name}
										description={description}
										language={language}
										homepage={homepage}
										topics={topics}
										index={index}
									/>
							</SwiperSlide>
						))}
					</Swiper>
			</div>

			<div className='hidden 2xl:block'>
				<Swiper
				spaceBetween={1}
							navigation={false}
							pagination={{ clickable: true }}
							scrollbar={{ draggable: true }}
				slidesPerView={4}
				className='mb-12'
						>
						{projects.map(({ name, language, id, description, homepage, topics }, index: number) => (
							<SwiperSlide
								key={id}
							>
									<CardProject
										id={id}
										name={name}
										description={description}
										language={language}
										homepage={homepage}
										topics={topics}
										index={index}
									/>
							</SwiperSlide>
						))}
					</Swiper>
			</div>

			<DescriptionProject />

		</div>
	);
}

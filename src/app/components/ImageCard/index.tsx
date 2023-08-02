import React, { ObjectHTMLAttributes } from 'react'
import Image from 'next/image'
import { rawGitHub, rawGitHubLastUrl } from '../../utils/env';

interface props extends ObjectHTMLAttributes<HTMLObjectElement>{
  id: string;
  name: string;
}

export default function ImageCard({id, name, ...rest}: props) {
  return (
    <object
      id={`capaDeProject${id}`} 
      className='w-full h-[280px] duration-500 object-cover object-top' 
      data={rawGitHub + name + rawGitHubLastUrl} 
      type='image/png' 
      aria-labelledby="imagem capa do projeto"
    {...rest}
    >
				<Image
					id={`capaDefault${id}`}
					className='duration-500 m-auto object-cover object-top'
					src='/images/cardProject/underConstruction.png'
					alt={name}
          width={300}
          height={280}
           />
			</object>
  )
}

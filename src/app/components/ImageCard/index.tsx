import React, { ObjectHTMLAttributes } from 'react'

interface props extends ObjectHTMLAttributes<HTMLObjectElement>{
  id: string;
  name: string;
}

export default function ImageCard({id, name, ...rest}: props) {
  return (
    <object
      id={`capaDeProject${id}`} 
      className='w-full h-[280px] duration-500 object-cover object-top' 
      data={`https://raw.githubusercontent.com/EversonDias/${name}/main/readme/cardProject/main.png`} 
      type='image/png' 
      aria-labelledby="imagem capa do projeto"
    {...rest}
    >
				<img
					id={`capaDefault${id}`}
					className='duration-500 m-auto object-cover object-top'
					src='/images/cardProject/underConstruction.png'
					alt={name}
           />
			</object>
  )
}

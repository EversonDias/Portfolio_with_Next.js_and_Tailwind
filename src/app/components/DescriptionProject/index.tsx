import React from 'react'
import { useContext } from "react";
import { ProjectContext } from "../../contexts/ProjectContext/context";
import icons from '../../utils/icons';
import { FiExternalLink } from 'react-icons/fi';
import ImageCard from "../ImageCard";
import { gitHube, gitHubeLastUrl } from "../../utils/env";

export default function DescriptionProject() {
  const { handleModal, activeModal } = useContext(ProjectContext);
  if (activeModal.cardItem) {
    const { name, description, id, language, homepage, topics } = activeModal.cardItem;
    
    return (
    <div onClick={() => handleModal(null)} className="backdrop-blur-sm fixed top-0 h-[100vh] w-full flex items-center z-20 text-font justify-center md:p-10">
      <div className="flex flex-col items-end bg-secondary p-4 rounded-md z-30 max-w-[90vw] lg:max-w-3xl max-h-[90vh] overflow-y-auto">
        <button className="btn btn-circle mb-4 bg-highlights text-primary hover:text-highlights duration-500" onClick={() => handleModal(null)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
            <div className="w-full text-center my-4">
              <p className={`text-xl flex gap-4 items-center justify-center hover:text-highlights duration-500`} >{name.replace(/_|-/g, ' ')}</p>
        </div>
        <div className="m-auto pb-4">
        <ImageCard 
          id={String(id)}
          name={name}
          className="w-[80%] md:w-[50%] m-auto"
        />
        </div>
        <div className="w-full">
          <div className="flex justify-center">
            <p className="text-2xl font-bold hoverUnderline mb-2 duration-500 md:text-4xl">Tecnologias</p>
          </div>
          <p className={`text-xl ${topics.length > 4  ? "grid grid-cols-3 md:grid-cols-4" : "flex justify-center"} gap-4  items-center justify-center text-center hover:text-highlights duration-500`}>
            {
              topics.map((topic, index: number) => (
                <div key={index}>
                  <i className={icons[topic.toLowerCase()]}></i>
                  <p>{topic}</p>
                </div>
              ))
            }
          </p>
          <p className="text-2xl font-bold hoverUnderline mb-2 mt-4 duration-500 md:text-4xl">Descrição</p>
          <p className="text-xl w-full md:text-2xl">{description}</p>
        </div>
        <div className="flex w-full justify-evenly mt-4">
          <a className='flex gap-2 hover:text-highlights text-xl duration-500 md:text-2xl' target='_blank' href={gitHube + name + gitHubeLastUrl} rel='noreferrer'>Repositório <FiExternalLink /></a>
          {
            homepage && (
              <a className='flex gap-2 hover:text-highlights text-xl duration-500 md:text-2xl' href={homepage} target='_blank' rel='noreferrer'>Site demo <FiExternalLink /></a>
            )
          }
        </div>
      </div>
    </div>
  )
}
}

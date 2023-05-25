import { useEffect, useState } from "react";
import { ContextProps, eventTarget } from "../../types";
import {ProjectContext} from './context';

export const ProjectProvider = ({ children }: ContextProps) => {
  const [projects, setProjects] = useState([]);
  const [activeModal, setActiveModal] = useState('')
  const [listLimit, setListLimit] = useState(5);

  async function GetProjects(): Promise<void> {
    const responseAPI = await fetch('https://api.github.com/users/EversonDias/repos');
    const responseJSON: Promise<[]> = await responseAPI.json();
    console.log(responseJSON);
    
    setProjects([...await responseJSON]);
  };

  useEffect(() => {
    GetProjects();
  }, []);

  function isIgnore(id: number):boolean {
		const projectIgnore = [516911726, 538154747, 595723869];
		return projectIgnore.includes(id);
	};

  function handleModal(event: eventTarget) {
    const {target: {id}} = event;
    setActiveModal(id);
  }

  function handleListLimit() {
    if (listLimit < projects.length) {
      setListLimit(listLimit + 5);
    } else if (listLimit === projects.length) {
      setListLimit(5);
    } else {
      setListLimit(projects.length);
    }
  }

  useEffect(() => {
    const width = window.screen.width;
    if(width >= 786) {
      setListLimit(projects.length)
    }
    
  }, [projects])
  
  return (
    <ProjectContext.Provider value={{projects, isIgnore, handleModal,activeModal, handleListLimit, listLimit}}>
      {children}
    </ProjectContext.Provider>
  )
}
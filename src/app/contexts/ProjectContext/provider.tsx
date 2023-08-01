"use client"
import { useEffect, useState } from "react";
import { ContextProps, eventTarget } from "../../types";
import { ProjectContext } from './context';
import { project } from "../../types";

export const ProjectProvider = ({ children }: ContextProps) => {
  const [projects, setProjects] = useState([]);
  const [activeModal, setActiveModal] = useState('')
  const [listLimit, setListLimit] = useState(3);

  async function GetProjects(): Promise<void> {
    const responseAPI = await fetch('https://api.github.com/users/EversonDias/repos');
    const responseJSON: Promise<[]> = await responseAPI.json();
    const filterProjects = [...await responseJSON].filter((project: project): boolean => !(project.fork || isIgnore(project.id)))
    setProjects(filterProjects);
  };

  useEffect(() => {
    GetProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function isIgnore(id: number): boolean {
    const projectIgnore = [516911726, 538154747, 595723869];
    return projectIgnore.includes(id);
  };

  function handleModal(event: eventTarget) {
    const { target: { id } } = event;
    setActiveModal(id);
  }

  function handleListLimit() {
    if (listLimit < projects.length - 5) {
      setListLimit(listLimit + 5);
    } else if (listLimit === projects.length) {
      setListLimit(3);
    } else {
      setListLimit(projects.length);
    }
  }

  return (
    <ProjectContext.Provider value={{ projects, isIgnore, handleModal, activeModal, handleListLimit, listLimit }}>
      {children}
    </ProjectContext.Provider>
  )
}
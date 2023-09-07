"use client"
import { useEffect, useState } from "react";
import { ContextProps, cardItem, eventTarget } from "../../types";
import { ProjectContext } from './context';
import { project } from "../../types";
import { apiGitHub } from "../../utils/env";

export const ProjectProvider = ({ children }: ContextProps) => {
  const [projects, setProjects] = useState([]);
  const [activeModal, setActiveModal] = useState<{ cardItem: Omit<cardItem, "index"> | null; }>({
    cardItem: null,
  })

  async function GetProjects(): Promise<void> {
    const responseAPI = await fetch(apiGitHub);
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

  function handleModal(cardItem: cardItem | null) {
    setActiveModal({
      cardItem: cardItem,
    });
  }

  return (
    <ProjectContext.Provider value={{ projects, isIgnore, handleModal, activeModal }}>
      {children}
    </ProjectContext.Provider>
  )
}
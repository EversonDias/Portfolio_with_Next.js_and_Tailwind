import { createContext } from "react";
import { eventTarget, project } from "../../types";

type value = {
  projects: project[];
  isIgnore: (id: number) => boolean;
  handleModal: (event: eventTarget) => void;
  activeModal: string;
  handleListLimit: () => void;
  listLimit: number;
}

const valueDefault = {
  projects: [],
  isIgnore: () => true || false,
  handleModal: () => { },
  activeModal: '',
  handleListLimit: () => { },
  listLimit: 3,
}

export const ProjectContext = createContext<value>(valueDefault);
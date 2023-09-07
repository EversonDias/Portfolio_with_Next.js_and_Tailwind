import { createContext } from "react";
import { eventTarget, project, cardItem } from "../../types";

type value = {
  projects: project[];
  isIgnore: (id: number) => boolean;
  handleModal: (cardItem: cardItem | null) => void;
  activeModal: { cardItem: Omit<cardItem, "index"> | null; };
}

const valueDefault = {
  projects: [],
  isIgnore: () => true || false,
  handleModal: (cardItem: cardItem | null) => { },
  activeModal: {cardItem: null, }
}

export const ProjectContext = createContext<value>(valueDefault);
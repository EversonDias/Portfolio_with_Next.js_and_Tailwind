export interface eventTarget {
  target: EventTarget<{
    checked?: boolean;
  }>,
}

export type cardItem = {
  name: string;
  id: number;
  description: string;
  language: string;
  homepage: string;
  topics: String[];
  index: number;
}

export type ContextProps = {
  children: ReactNode;
}

export type project = {
  name: string,
  language: string, 
  id: number,
  fork: boolean,
  description: string, 
  homepage: string;
  topics: String[];
}
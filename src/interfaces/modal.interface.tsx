import { ReactNode } from "react";

export interface iOpenModal {
  isOpen: boolean;
  setIsOpen: (newState: boolean) => void;
}

export const defaultState: iOpenModal = {
  isOpen: false,
  setIsOpen: () => {},
};

export interface iModal {
  children: ReactNode;
  title: string;
}

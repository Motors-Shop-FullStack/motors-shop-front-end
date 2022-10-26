import { ReactNode } from "react";
import { ModalProvider } from "./modalProvider";

interface iReact {
  children: ReactNode;
}

export const Providers = ({ children }: iReact) => {
  return <ModalProvider>{children}</ModalProvider>;
};

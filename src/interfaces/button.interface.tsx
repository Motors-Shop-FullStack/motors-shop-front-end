import { ButtonHTMLAttributes, ReactNode } from "react";
import { iButtonVariant, iWidthProps } from "./types";

export interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  size?: "big" | "medium";
  width?: iWidthProps | number;
  variant: iButtonVariant;
  marginButton?: string;
}

export interface iDoubleButton {
  label?: string;
  firstButtonVariant: iButtonVariant;
  firstButtonText: ReactNode;
  secondButtonVariant: iButtonVariant;
  secondButtonText: ReactNode;
  width?: iWidthProps | number;
}

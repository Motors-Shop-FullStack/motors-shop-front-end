import { ButtonHTMLAttributes, ReactNode } from "react";

type iVariant =
  | "grey1"
  | "negative"
  | "disable"
  | "brand1"
  | "brandOpacity"
  | "light"
  | "lightOutline"
  | "big45"
  | "outline2"
  | "outlineBrand"
  | "alert"
  | "sucess"
  | "brandDisable"
  | "linkButton";

export interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  size?: "big" | "medium";
  width?:
    | 10
    | 15
    | 20
    | 25
    | 30
    | 35
    | 40
    | 45
    | 50
    | 55
    | 60
    | 65
    | 70
    | 75
    | 80
    | 85
    | 90;

  variant: iVariant;
}

export interface iDoubleButton {
  label?: string;
  firstButtonVariant: iVariant;
  firstButtonText: ReactNode;
  secondButtonVariant: iVariant;
  secondButtonText: ReactNode;
}

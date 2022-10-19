import { ReactNode } from "react";

export interface iButton {
  children?: ReactNode;
  size?: "big" | "medium";
  width?: 25 | 50 | 75 | 90;
  variant:
    | "grey0"
    | "negative"
    | "disable"
    | "brand1"
    | "brandOpacity"
    | "light"
    | "alert"
    | "sucess"
    | "brandDisable"
    | "linkButton";
}

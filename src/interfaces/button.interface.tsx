import { ReactNode } from "react";

export interface iButton {
  children?: ReactNode;
  size?: "big" | "medium";
  width?: 10 | 15 | 20 | 25 | 30 | 40 | 50 | 60 | 70 | 75 | 90;
  variant:
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
}

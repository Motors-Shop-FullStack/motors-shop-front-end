import { HTMLAttributes, ReactNode } from "react";
export interface iTypography
  extends HTMLAttributes<HTMLHeadingElement & HTMLParagraphElement> {
  children: ReactNode;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "p1" | "p2";
  fW?: 400 | 500 | 600;
  blck?: boolean;
}
export interface iTypoStyledProps {
  fW?: 400 | 500 | 600;
  blck?: boolean;
}

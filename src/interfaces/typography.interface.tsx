import { ReactNode } from "react";

export interface iTypography {
  children: ReactNode;
  tag: string;
  fW?: 400 | 500 | 600;
}

export interface iTypoStyledProps {
  fW?: 400 | 500 | 600;
}

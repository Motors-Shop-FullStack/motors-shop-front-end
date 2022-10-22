import { InputHTMLAttributes } from "react";

// export interface IInput extends React.ComponentPropsWithRef<"input"> {
//   label: string;
// }

export interface iInput
  extends InputHTMLAttributes<HTMLInputElement & HTMLDivElement> {
  label?: string;
  marginDiv?: boolean;
}

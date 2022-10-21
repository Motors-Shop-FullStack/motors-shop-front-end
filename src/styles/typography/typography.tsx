import { iTypography } from "../../interfaces/typography.interface";
import * as Typo from "./styles";

export function Typography({ children, tag, fW }: iTypography) {
  return (
    <>
      {tag == "h1" ? (
        <Typo.H1>{children}</Typo.H1>
      ) : tag == "h2" ? (
        <Typo.H2>{children}</Typo.H2>
      ) : tag == "h3" ? (
        <Typo.H3 fW={fW}>{children}</Typo.H3>
      ) : tag == "h4" ? (
        <Typo.H4 fW={fW}>{children}</Typo.H4>
      ) : tag == "h5" ? (
        <Typo.H5 fW={fW}>{children}</Typo.H5>
      ) : tag == "h6" ? (
        <Typo.H6 fW={fW}>{children}</Typo.H6>
      ) : tag == "h7" ? (
        <Typo.H7 fW={fW}>{children}</Typo.H7>
      ) : tag == "p1" ? (
        <Typo.P1 fW={fW}>{children}</Typo.P1>
      ) : (
        <Typo.P2 fW={fW}>{children}</Typo.P2>
      )}
    </>
  );
}

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Profile from "../../assets/Frame 4.svg";
import Logo from "../../assets/logo.svg";
import { iHeader } from "../../interfaces/header.interface";
import { Typography } from "../../styles/typography/typography";
import { Button } from "../Button";
import { NavBarModal } from "./nav_bar_modal";
import * as S from "./styles";

export function Header({ user }: iHeader) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.HeaderStyled>
      <section>
        <figure>
          <img src={Logo} alt="Logo" />
        </figure>
      </section>
      <S.SectionNav>
        {isOpen && <NavBarModal setOpenModal={setIsOpen} />}
        <S.Burguer onClick={() => setIsOpen(true)}>
          <GiHamburgerMenu size={20} />
        </S.Burguer>
        <S.NavItens>
          <S.Functionalities>
            <Typography tag="p">Carros</Typography>

            <Typography tag="p">Motos</Typography>

            <Typography tag="p">Leilão</Typography>
          </S.Functionalities>
          {user ? (
            <S.SectionRegister>
              <figure>
                <img src={Profile} alt="Profile image" />
              </figure>
              <Typography tag="p">Samuel Leão</Typography>
            </S.SectionRegister>
          ) : (
            <S.SectionRegister>
              <Typography tag="p">Fazer Login</Typography>
              <Button variant="big45" width={50}>
                Cadastrar
              </Button>
            </S.SectionRegister>
          )}
        </S.NavItens>
      </S.SectionNav>
    </S.HeaderStyled>
  );
}

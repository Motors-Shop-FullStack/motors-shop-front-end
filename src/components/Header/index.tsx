import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../assets/logo.svg";
import { iHeader } from "../../interfaces/header.interface";
import { Typography } from "../../styles/typography/typography";
import { Button } from "../Button";
import { NavBarModal } from "./nav_bar_modal";
import {
  Burguer,
  Functionalities,
  HeaderStyled,
  NavItens,
  SectionNav,
  SectionRegister,
} from "./styles";

export function Header({ user }: iHeader) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderStyled>
      <section>
        <figure>
          <img src={Logo} alt="Logo" />
        </figure>
      </section>
      <SectionNav>
        {isOpen && <NavBarModal setOpenModal={setIsOpen} />}
        <Burguer onClick={() => setIsOpen(true)}>
          <GiHamburgerMenu size={30} />
        </Burguer>
        <NavItens>
          <Functionalities>
            <Typography tag="p">Carros</Typography>

            <Typography tag="p">Motos</Typography>

            <Typography tag="p">Leilão</Typography>
          </Functionalities>
          <SectionRegister>
            <Typography tag="p">Fazer Login</Typography>
            <Button variant="big45" width={50}>
              Cadastrar
            </Button>
          </SectionRegister>
        </NavItens>
      </SectionNav>
    </HeaderStyled>
  );
}

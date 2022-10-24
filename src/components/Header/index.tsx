import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import LOGO from "../../assets/logo.svg";
import { iHeader } from "../../interfaces/header.interface";
import { Typography } from "../../styles/typography/typography";
import { splitName } from "../../utils/splitName";
import { Button } from "../Button";
import { NavBarModal } from "./nav_bar_modal";
import * as S from "./styles";

export function Header({ advertiser }: iHeader) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.HeaderStyled>
      <section>
        <figure>
          <img src={LOGO} alt="Logo" />
        </figure>
      </section>
      <S.SectionNav>
        {isOpen && <NavBarModal user={advertiser} setOpenModal={setIsOpen} />}
        <S.Burguer onClick={() => setIsOpen(true)}>
          <GiHamburgerMenu size={20} />
        </S.Burguer>
        <S.NavItens>
          <S.Functionalities>
            <Typography tag="p2">Carros</Typography>

            <Typography tag="p2">Motos</Typography>

            <Typography tag="p2">Leilão</Typography>
          </S.Functionalities>
          {advertiser ? (
            <S.SectionUser>
              <S.Avatar>
                <Typography tag="p2" fW={600}>
                  {splitName(advertiser)}
                </Typography>
              </S.Avatar>
              <Typography tag="p2">{advertiser}</Typography>

              <div className="drop-down">
                <Typography tag="p2">Editar Perfil</Typography>
                <Typography tag="p2">Editar Endereço</Typography>
                <Typography tag="p2">Minhas Compras</Typography>
                <Typography tag="p2">Sair</Typography>
              </div>
            </S.SectionUser>
          ) : (
            <S.SectionRegister>
              <Typography tag="p2">Fazer Login</Typography>
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

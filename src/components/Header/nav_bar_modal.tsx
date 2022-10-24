import { MdOutlineClose } from "react-icons/md";
import Logo from "../../assets/logo.svg";
import { Typography } from "../../styles/typography/typography";
import { Button } from "../Button";
import * as S from "./nav_bar_styled";
export function NavBarModal({ user, setOpenModal }: any) {
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <S.NavBarModalStyled>
      <S.HeaderModal>
        <figure>
          <img src={Logo} alt="Logo" />
        </figure>
        <div onClick={closeModal}>
          <MdOutlineClose size={20} />
        </div>
      </S.HeaderModal>
      <section>
        <S.Functionalities>
          <Typography tag="p2" fW={500}>
            Carros
          </Typography>

          <Typography tag="p2" fW={500}>
            Motos
          </Typography>

          <Typography tag="p2" fW={500}>
            Leilão
          </Typography>
        </S.Functionalities>
        <S.Functionalities>
          {user ? (
            <>
              {" "}
              <Typography tag="p2" fW={500}>
                Editar Perfil
              </Typography>
              <Typography tag="p2" fW={500}>
                Editar endereço
              </Typography>
              <Typography tag="p2" fW={500}>
                Minhas Compras
              </Typography>
              <Typography tag="p2" fW={500}>
                Sair
              </Typography>
            </>
          ) : (
            <>
              {" "}
              <Typography tag="p2" fW={500}>
                Fazer Login
              </Typography>
              <Button variant="big45">Cadastrar</Button>
            </>
          )}
        </S.Functionalities>
      </section>
    </S.NavBarModalStyled>
  );
}

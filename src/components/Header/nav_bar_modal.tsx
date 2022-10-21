import { AiOutlineCloseCircle } from "react-icons/ai";
import { NavBarModalStyled, NavStyled } from "./nav_bar_styled";
export function NavBarModal({ setOpenModal }: any) {
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <NavBarModalStyled>
      <NavStyled>
        <a href="">Test</a>
        <a href="">Test2</a>
      </NavStyled>
      <AiOutlineCloseCircle onClick={closeModal} />
    </NavBarModalStyled>
  );
}

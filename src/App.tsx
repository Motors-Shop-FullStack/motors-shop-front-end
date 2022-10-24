import { Modal } from "./components/Modal";
import { CreateAdModal } from "./components/Modal/CreateAdModal";
import { EditProfileModal } from "./components/Modal/EditProfileModal";
import { UpdateAdModal } from "./components/Modal/UpdateAdModal";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />

      <Modal title={"Editar perfil"}>
        <EditProfileModal />
      </Modal>
    </>
  );
}

export default App;

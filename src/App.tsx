import { Modal } from "./components/Modal";
import { CreateAdModal } from "./components/Modal/CreateAdModal";
import { UpdateAdModal } from "./components/Modal/UpdateAdModal";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />

      <Modal title={"Criar anuncio"}>
        <CreateAdModal />
      </Modal>
    </>
  );
}

export default App;

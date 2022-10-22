import { Modal } from "./components/Modal";
import { UpdateAdModal } from "./components/Modal/UpdateAdModal";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />

      <Modal title={"Editar anúncio"}>
        <UpdateAdModal />
      </Modal>
    </>
  );
}

export default App;

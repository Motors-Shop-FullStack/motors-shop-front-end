// import { SucessModal } from "./components/Modal/SucessModal";
import { Modal } from "./components/Modal";
import { UpdateAdModal } from "./components/Modal/UpdateAdModal";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <Modal title="Sucesso!">
        <SucessModal />
      </Modal> */}
      <Modal title={"Editar anúncio"}>
        <UpdateAdModal />
      </Modal>
    </>
  );
}

export default App;

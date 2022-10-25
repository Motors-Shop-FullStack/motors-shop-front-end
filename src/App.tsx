import { Modal } from "./components/Modal";

import { useModal } from "./providers/modalProvider";
import GlobalStyles from "./styles/global";

function App() {
  const {
    createAdModal,
    setCreateAdModal,
    deleteModal,
    setDeleteModal,
    imgModal,
    setImgModal,
    sucessModal,
    setSucessModal,
    updateAdModal,
    setUpdateAdModal,
    updateAdressModal,
    setUpdateAdressModal,
    updateProfileModal,
    setUpdateProfileModal,
  } = useModal();

  const handleCreateAd = () => {
    setCreateAdModal(!createAdModal);
  };
  const handleImgModal = () => {
    setImgModal(!imgModal);
  };
  const handleSucessModal = () => {
    setSucessModal(!sucessModal);
  };
  const handleUpdateAdModal = () => {
    setUpdateAdModal(!updateAdModal);
  };
  const handleUpdateAdressModal = () => {
    setUpdateAdressModal(!updateAdressModal);
  };
  const handleUpdateProfileModal = () => {
    setUpdateProfileModal(!updateProfileModal);
  };
  const handleDeletemodal = () => {
    setDeleteModal(!deleteModal);
  };

  return (
    <>
      <GlobalStyles />
      <button onClick={() => handleCreateAd()}>createAdModal</button>
      <button onClick={() => handleDeletemodal()}>deleteModal</button>
      <button onClick={() => handleImgModal()}>imgModal</button>
      <button onClick={() => handleSucessModal()}>sucessModal</button>
      <button onClick={() => handleUpdateAdModal()}>updateAdModal</button>
      <button onClick={() => handleUpdateAdressModal()}>
        updateAdressModal
      </button>
      <button onClick={() => handleUpdateProfileModal()}>
        updateProfileModal
      </button>

      <Modal />
    </>
  );
}

export default App;

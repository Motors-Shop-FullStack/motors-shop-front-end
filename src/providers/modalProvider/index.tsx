import { useContext, createContext, useState, ReactNode } from "react";

interface iModalProvider {
  children: ReactNode;
}

interface iModalContext {
  createAdModal: boolean;
  setCreateAdModal: (newValue: boolean) => void;
  deleteModal: boolean;
  setDeleteModal: (newValue: boolean) => void;
  imgModal: boolean;
  showImg: string;
  setShowImg: (newValue: string) => void;
  setImgModal: (newValue: boolean) => void;
  sucessModal: boolean;
  setSucessModal: (newValue: boolean) => void;
  updateAdModal: boolean;
  setUpdateAdModal: (newValue: boolean) => void;
  updateAdressModal: boolean;
  setUpdateAdressModal: (newValue: boolean) => void;
  updateProfileModal: boolean;
  setUpdateProfileModal: (newValue: boolean) => void;
}

const defaultValue: iModalContext = {
  createAdModal: false,
  setCreateAdModal: () => {},
  deleteModal: false,
  setDeleteModal: () => {},
  imgModal: false,
  setImgModal: () => {},
  showImg: "",
  setShowImg: () => "",
  sucessModal: false,
  setSucessModal: () => {},
  updateAdModal: false,
  setUpdateAdModal: () => {},
  updateAdressModal: false,
  setUpdateAdressModal: () => {},
  updateProfileModal: false,
  setUpdateProfileModal: () => {},
};

export const ModalContext = createContext(defaultValue);

export const ModalProvider = ({ children }: iModalProvider) => {
  const [createAdModal, setCreateAdModal] = useState(
    defaultValue.createAdModal
  );
  const [deleteModal, setDeleteModal] = useState(defaultValue.deleteModal);
  const [imgModal, setImgModal] = useState(defaultValue.imgModal);
  const [showImg, setShowImg] = useState(defaultValue.showImg);
  const [sucessModal, setSucessModal] = useState(defaultValue.sucessModal);
  const [updateAdModal, setUpdateAdModal] = useState(
    defaultValue.updateAdModal
  );
  const [updateAdressModal, setUpdateAdressModal] = useState(
    defaultValue.updateAdressModal
  );
  const [updateProfileModal, setUpdateProfileModal] = useState(
    defaultValue.updateProfileModal
  );

  return (
    <ModalContext.Provider
      value={{
        createAdModal,
        setCreateAdModal,
        deleteModal,
        setDeleteModal,
        imgModal,
        setImgModal,
        showImg,
        setShowImg,
        sucessModal,
        setSucessModal,
        updateAdModal,
        setUpdateAdModal,
        updateAdressModal,
        setUpdateAdressModal,
        updateProfileModal,
        setUpdateProfileModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

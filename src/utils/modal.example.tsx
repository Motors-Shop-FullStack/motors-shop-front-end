import { useModal } from "../providers/modalProvider";

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

export {};

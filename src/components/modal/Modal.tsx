import "./modal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  closeModal: () => void;
}

const Modal = ({ closeModal }: ModalProps) => {
  return (
    <div className="modal_wrapper">
      <div className="modal_wrapper_content">
        <button
          type="button"
          className="modal_wrapper_content_btn"
          onClick={closeModal}
          aria-label="Close modal"
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
        <h2>Employee Created!</h2>
      </div>
    </div>
  );
};

export default Modal;

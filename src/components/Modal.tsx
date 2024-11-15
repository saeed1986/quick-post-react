import classes from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  // Stop the click event from propagating to the backdrop when clicking inside the modal
  const modalClickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <>
      <div className={classes.backdrop} onClick={onClose}>
        <dialog open className={classes.modal} onClick={modalClickHandler}>
          {children}
        </dialog>
      </div>
    </>
  );
};

export default Modal;

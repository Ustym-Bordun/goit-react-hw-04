import Modal from 'react-modal';
import { GoX } from 'react-icons/go';

Modal.setAppElement('#root');

import css from './ImageModal.module.css';

const ImageModal = ({ photo, onModalClose, altDescription }) => {
  const isOpen = Boolean(photo);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onModalClose}
      // default styles
      style={{
        overlay: {
          // position: 'fixed',
          // top: 0,
          // left: 0,
          // right: 0,
          // bottom: 0,
          // backgroundColor: 'rgba(255, 255, 255, 0.75)',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          position: 'absolute',
          top: '40px',
          left: '100px',
          right: '100px',
          bottom: '40px',
          border: '1px solid #ccc',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px',
        },
      }}
    >
      <img
        src={photo}
        alt={
          altDescription
            ? altDescription.slice(0, 1).toUpperCase() + altDescription.slice(1)
            : "There's no description"
        }
      />
      {/* <button className={css.btn} onClick={() => setPhoto(null)}> */}
      <button className={css.btn} onClick={onModalClose}>
        <GoX size="20" color="#ffffff" />
      </button>

      <p className={css.text}>
        {altDescription
          ? altDescription.slice(0, 1).toUpperCase() + altDescription.slice(1)
          : "There's no description"}
      </p>
    </Modal>
  );
};

export default ImageModal;

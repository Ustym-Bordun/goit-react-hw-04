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
      shouldReturnFocusAfterClose={false}
      style={{
        overlay: {
          // position: 'fixed', // default style
          // top: 0, // default style
          // left: 0, // default style
          // right: 0, // default style
          // bottom: 0, // default style

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          // position: 'absolute', // default style
          // top: '40px', // default style
          // left: '40px', // default style
          // right: '40px', // default style
          // bottom: '40px', // default style
          // overflow: 'auto', // default style
          // border: '1px solid #ccc', // default style
          // background: '#fff', // default style
          // WebkitOverflowScrolling: 'touch', // default style
          // borderRadius: '4px', // default style
          // outline: 'none', // default style
          // padding: '20px', // default style

          position: 'relative',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          top: 'unset',
          left: 'unset',
          right: 'unset',
          bottom: 'unset',

          width: '90vw',
          height: '90vh',
          maxWidth: '800px',
          maxHeight: '600px',
          overflow: 'hidden',
          border: 'none',
          background: 'rgba(105, 255, 63, 0.8)',
          borderRadius: '20px',
          padding: '0px',
        },
      }}
    >
      <img
        className={css.image}
        src={photo}
        alt={
          altDescription
            ? altDescription.slice(0, 1).toUpperCase() + altDescription.slice(1)
            : "There's no description"
        }
      />
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

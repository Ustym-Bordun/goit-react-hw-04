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
      // default styles
      style={{
        overlay: {
          // position: 'fixed', // default styles
          // top: 0, // default styles
          // left: 0, // default styles
          // right: 0, // default styles
          // bottom: 0, // default styles
          backgroundColor: 'rgba(0, 0, 0, 0.75)',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        content: {
          // position: 'absolute', // default styles
          position: 'relative',
          // top: '40px', // default styles
          // left: '40px', // default styles
          // right: '40px', // default styles
          // bottom: '40px', // default styles
          // overflow: 'auto', // default styles
          // border: '1px solid #ccc', // default styles
          // background: '#fff', // default styles
          // WebkitOverflowScrolling: 'touch', // default styles
          // borderRadius: '4px', // default styles
          // outline: 'none', // default styles
          // padding: '20px', // default styles
          // top: '7%',
          // left: '7%',
          // right: '7%',
          // bottom: '7%',
          // maxWidth: '800px',
          // maxHeight: '600px',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          width: '90vw',
          height: '90vh',
          maxWidth: '800px',
          maxHeight: '600px',
          top: 'unset',
          left: 'unset',
          right: 'unset',
          bottom: 'unset',
          overflow: 'hidden',
          border: 'none',
          background: 'rgba(105, 255, 63, 0.8)',
          // borderRadius: '30px',
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

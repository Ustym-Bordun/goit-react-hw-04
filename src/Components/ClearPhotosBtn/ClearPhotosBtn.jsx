import css from './ClearPhotosBtn.module.css';

const ClearPhotosBtn = ({ onClearPhotos }) => {
  return (
    <button className={css.btn} onClick={onClearPhotos}>
      Clear photos
    </button>
  );
};

export default ClearPhotosBtn;

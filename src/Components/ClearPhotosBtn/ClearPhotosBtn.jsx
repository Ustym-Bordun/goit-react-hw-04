import css from './ClearPhotosBtn.module.css';

const ClearPhotosBtn = ({ onClearPhotos }) => {
  return (
    <div className={css.wrapper}>
      <button className={css.btn} onClick={onClearPhotos}>
        Clear photos
      </button>
    </div>
  );
};

export default ClearPhotosBtn;

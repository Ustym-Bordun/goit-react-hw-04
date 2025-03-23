import css from './TotalPhotosInfo.module.css';

const TotalPhotosInfo = ({ totalPhotos }) => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Total Photos Info : {totalPhotos}</p>
    </div>
  );
};

export default TotalPhotosInfo;

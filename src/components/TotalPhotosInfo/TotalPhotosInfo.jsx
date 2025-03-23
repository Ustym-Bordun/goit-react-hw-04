import css from './TotalPhotosInfo.module.css';

const TotalPhotosInfo = ({ totalPhotos, query }) => {
  return (
    <p className={css.text}>
      We found {totalPhotos} "{query}" photos
    </p>
  );
};

export default TotalPhotosInfo;

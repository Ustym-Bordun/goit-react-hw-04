import css from './ZeroPhotosFound.module.css';

const ZeroPhotosFound = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Sorry but there is no photos by your query.</p>
    </div>
  );
};

export default ZeroPhotosFound;

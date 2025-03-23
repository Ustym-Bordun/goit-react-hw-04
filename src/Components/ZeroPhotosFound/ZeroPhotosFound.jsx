import css from './ZeroPhotosFound.module.css';

const ZeroPhotosFound = ({ query }) => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Sorry but there is no photos by this query</p>
      <span className={css.span}> '{query}' </span>
    </div>
  );
};

export default ZeroPhotosFound;

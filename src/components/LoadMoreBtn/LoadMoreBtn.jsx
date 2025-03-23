import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onloadMore }) => {
  return (
    // <div className={css.wrapper}>
    <button className={css.btn} onClick={onloadMore}>
      Load more
    </button>
    // </div>
  );
};

export default LoadMoreBtn;

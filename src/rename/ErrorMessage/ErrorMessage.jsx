import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>
        Sorry but there was an <span className={css.span}>error</span>.
      </p>
      <p className={css.text}>Please reload the page.</p>
    </div>
  );
};

export default ErrorMessage;

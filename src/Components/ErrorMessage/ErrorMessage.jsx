import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>
        Sorry but there was an error. Please refresh the page.
      </p>
    </div>
  );
};

export default ErrorMessage;

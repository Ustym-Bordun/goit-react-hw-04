import { BeatLoader } from 'react-spinners';

// import css from './Loader.module.css';

const Loader = () => (
  // <div className={css.wrapper}>
  <BeatLoader
    color="#1b29e3"
    cssOverride={{
      display: 'flex',
      justifyContent: 'center',
      padding: '4px',
    }}
    margin={3}
    size={20}
    speedMultiplier={0.8}
  />
  // </div>
);

export default Loader;

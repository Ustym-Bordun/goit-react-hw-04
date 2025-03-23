import { BeatLoader } from 'react-spinners';

// import css from './Loader.module.css';

const Loader = () => (
  // <div className={css.wrapper}>
  <BeatLoader
    color="rgba(27, 40, 227, 0.85)"
    cssOverride={{
      display: 'flex',
      justifyContent: 'center',
      padding: '4px',
    }}
    margin={3}
    size={26}
    speedMultiplier={0.8}
  />
  // </div>
);

export default Loader;

import clsx from 'clsx';

import { MdWavingHand } from 'react-icons/md';

import css from './NothingSearched.module.css';

const NothingSearched = () => {
  return (
    <>
      <div className={css.wrapper}>
        <p className={clsx(css.title)}>Hello user</p>
        <MdWavingHand size={24} />
      </div>
      <p className={css.text}>You can search photos up in a search bar</p>
    </>
  );
};

export default NothingSearched;

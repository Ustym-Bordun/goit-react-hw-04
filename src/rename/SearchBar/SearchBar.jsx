import { GoSearch } from 'react-icons/go';
import toast, { Toaster } from 'react-hot-toast';

const notify = () =>
  toast("query cann't be empty.", {
    duration: 3000,
    position: 'top-right',

    style: {
      backgroundColor: 'rgb(166, 218, 236)',
      border: '1px solid rgb(32, 32, 32)',
    },
    icon: <GoSearch size={20} />,
  });

import css from './SearchBar.module.css';

import Section from '../Section/Section';
import Container from '../Container/Container';

const SearchBar = ({ onSubmit }) => {
  return (
    <Section>
      <Container>
        <header className={css.header}>
          <form
            className={css.form}
            onSubmit={e => {
              e.preventDefault();
              const value = e.target.elements.searchQueryInput.value;

              if (value === '') {
                notify();
                return;
              }

              onSubmit(value);
              e.target.reset();
            }}
          >
            <input
              className={css.input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name="searchQueryInput"
            />
            <button className={css.btn} type="submit">
              <GoSearch size={20} />
            </button>
          </form>
        </header>
        <Toaster />
      </Container>
    </Section>
  );
};

export default SearchBar;

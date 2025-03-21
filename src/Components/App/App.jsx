// import Section from '../Section/Section';
// import Container from '../Container/Container';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  const handleSubmit = value => {
    console.log(value);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
    </>
  );
}

export default App;

/* 
https://api.unsplash.com/
/search/photos

?client_id=WlhDx3QJGuL7onPljCL9sGWrZc0RmZS4gyH8bwfSx9A
*/

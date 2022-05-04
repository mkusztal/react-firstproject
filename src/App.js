import Hero from './components/Hero/Hero';
import SearchForm from './components/SearchForm/SearchForm';
import List from './components/List/List';
import Container from './components/Container/Container';
import AddColumn from './components/AddColumn/AddColumn';

const App = () => {
  return (
    <Container>
      <Hero />
      <SearchForm />
      <List />
      <AddColumn />
    </Container>
  );
};

export default App;

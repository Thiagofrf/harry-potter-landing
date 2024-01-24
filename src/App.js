import './App.scss';
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import HousesContainer from './components/HousesContainer/HousesContainer';
import CharContainer from './components/CharContainer/CharContainer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <HousesContainer />
      <CharContainer />
    </div>
  );
}

export default App;

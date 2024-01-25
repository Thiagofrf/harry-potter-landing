import './App.scss';
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import HousesContainer from './components/HousesContainer/HousesContainer';
import CharContainer from './components/CharContainer/CharContainer';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <HousesContainer />
      <CharContainer />
      <Footer />
    </div>
  );
}

export default App;

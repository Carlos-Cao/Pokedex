import './App.css';
import './api/Api';
import Header from './components/Header';
import Search from './components/Search';
import Statistics from './components/Statistics';

function App() {
  return (
    <div>
      <Header />
      <Search />
      <Statistics />
    </div >
  );
}

export default App;

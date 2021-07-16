import Header from './components/Header'
import Search from "./components/Search";
import ProductData from "./data.json";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Search placeholder="Enter a Product Name..." data={ProductData} />
    </div>
  );
}

export default App;

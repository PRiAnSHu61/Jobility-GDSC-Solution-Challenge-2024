// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Homescreen from './views/Homescreen';
import ProductDisc from './components/ProductDescription'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
          <Route exact path='/' element={<Homescreen/>}/>
          <Route path='/ProductPage' element={<ProductDisc/>}/>
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;

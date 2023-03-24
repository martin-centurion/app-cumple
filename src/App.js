import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div>
      <BrowserRouter>
            
            <NavBar />
            
            <Routes>
                
                <Route
                    path='/'
                    element= { <Banner /> }
                />

                <Route 
                    path='/fotos'
                    element= { <ItemListContainer /> }
                />

            </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

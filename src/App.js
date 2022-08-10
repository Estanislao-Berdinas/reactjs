import './App.css';
import BarraNav from './components/BarraNav/BarraNav';
import {Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer';

function App() {

 
  return (
    <div className="App">
      <BarraNav />
        

    {/* <ItemCount /> */}
    {/* <ItemDetailsContainer /> */}
    
      <Routes>
        <Route path='/' element={<ItemListContainer />}> </Route>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer />}> </Route>
        <Route path='/detalles/:ProductoId' element={<ItemDetailsContainer />}> </Route>
      </Routes> 
            

    </div>
  );
}

export default App;

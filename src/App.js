import BarraNav from './components/BarraNav/BarraNav';
import {Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer';
import CartWidget from './components/CartWidget/CartWidget';
import CartContextProvider from './Context/CartContext';


function App() {
 
  return (
    <CartContextProvider>

      <BarraNav />
     
      <Routes>
        <Route path='/' element={<ItemListContainer />}> </Route>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer />}> </Route>
        <Route path='/detalles/:ProductoId' element={<ItemDetailsContainer />}> </Route>
        <Route path='/carro' element={<CartWidget />}> </Route>
      </Routes> 
            

    </CartContextProvider>
  );
}

export default App;

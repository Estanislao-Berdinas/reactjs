import BarraNav from './components/BarraNav/BarraNav';
import {Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer';
import CartContextProvider from './Context/CartContext';
import Carro from './components/Carro/Carro';





function App() {

   
  return (

    <CartContextProvider>

      <BarraNav />
     
      <Routes>
        <Route path='/' element={<ItemListContainer />}> </Route>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer />}> </Route>
        <Route path='/detalles/:ProductoId' element={<ItemDetailsContainer />}> </Route>
        <Route path='/Carro' element={<Carro />}> </Route>
      </Routes> 
            

    </CartContextProvider>
  );
}

export default App;

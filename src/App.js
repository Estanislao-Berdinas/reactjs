import './App.css';
import BarraNav from './components/BarraNav/BarraNav';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

 
  return (
    <div className="App">
      <BarraNav />
        

    {/* <ItemCount /> */}
    {/* <ItemDetailsContainer /> */}
            
      <Routes>
        <Route path='/' element={<ItemListContainer />}> </Route>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer />}> </Route>
               
      </Routes> 
            

    </div>
  );
}

export default App;

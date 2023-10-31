import { useState } from 'react'
import NavBar from './componert/NavBar/NavBar'
import './App.css'
import ItemListContainer from './componert/ItemListContainer/ItemListContainer'
function App() {
  return (
    
      <div className='App'>
       <NavBar />
        <ItemListContainer greeting={'Bienvenido'} />
      </div>

  );
}
export default App


import { Routes , Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';

function App() {


  return (
    <>
     <Navbar/>
     <div className=' flex flex-row'>
     <Sidebar/>
     <Routes>
        <Route path='/' />
        <Route path='/add'  element={<Add/>} />
        <Route path='/list'  element={<List/>} />
        <Route path='/orders'  element={<Orders/>} />
      </Routes>
      </div>
    </>
  )
}

export default App;

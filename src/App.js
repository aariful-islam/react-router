
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './Componetns/About/About'
import About from './Componetns/About/About';
import Home from './Componetns/Home/Home';


function App() {
  return (
    <div className="App">
    
     <Routes>
       <Route path='/' element={<Home></Home>}>

       </Route>
       <Route path='/about' element={<About></About>}></Route>
     </Routes>
     

     {/* <About></About>
     <Home></Home>
       */}
    </div>
  );
}

export default App;


import { Route, Routes } from 'react-router-dom';
import './App.css';
import './Componetns/About/About'
import About from './Componetns/About/About';
import FriendDetails from './Componetns/FriendDetails/FriendDetails';
import Friends from './Componetns/Friends/Friends';
import Header from './Componetns/Header/Header';
import Home from './Componetns/Home/Home';


function App() {
  return (
    <div className="App">
      <Header></Header>
    
     <Routes>
       <Route path='/' element={<Home></Home>}>

       </Route>
       <Route path='/friends' element={<Friends></Friends>}>

       </Route>
       <Route path='/friends/:id' element={<FriendDetails></FriendDetails>}>

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

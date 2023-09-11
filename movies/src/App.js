
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import { Routes ,Route } from 'react-router-dom';
import SingleMovie from './SingleMovie';
import Rating from './Rating';



 function App() {  
  return (
    <div className="App"> 
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='movie/:id' element={<SingleMovie/>}/>
      <Route path='filter/:imdbRating' element={<Rating/>}/>
     </Routes>
    </div>
  );
}

export default App;

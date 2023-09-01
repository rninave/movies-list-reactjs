
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import { Routes ,Route } from 'react-router-dom';
import SingleMovie from './SingleMovie';


 function App() {  
  return (
    <div className="App"> 
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='movie/:id' element={<SingleMovie/>}/>
     </Routes>
    </div>
  );
}

export default App;

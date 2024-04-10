import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Login';
import Signin from './Signin';
import Home from './Home';


const Navigate = () =>{
  return(
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/Home" element={<Home/>}/>

        </Routes>
        </BrowserRouter>
        )
      }
export default Navigate;
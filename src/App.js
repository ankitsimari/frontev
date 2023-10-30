import logo from './logo.svg';
import './App.css';
import Login from './componet/login';
import AllRoutes from './AllRoutes';
import { Link } from 'react-router-dom';

function App() {
  return (

      <div className="App">
      <div className='nav' >
          <Link to="/" >HOME</Link>
          <Link to="/signup" >Sign Up</Link>
          <Link to="/login" >Login</Link>
          <Link to="/posts" >Post</Link>
      </div>
      <AllRoutes />
    </div>

  );
}

export default App;

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ViewEmployee from './employee/ViewEmployee';
import PrivateRoute from './components/PrivateRoute.js'
import ErrorHandle from './pages/ErrorHandle';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>            
             <Route exact path="/"  element={<PrivateRoute><Home/></PrivateRoute>} />
             <Route exact path="/viewemployee/:employee_id"  element={<PrivateRoute><ViewEmployee/></PrivateRoute>} /> 
             <Route exact path="/login"  element={<PrivateRoute><ErrorHandle/></PrivateRoute>} />
        </Routes>     
       
       </Router>
    </div>
  );
}

export default App;

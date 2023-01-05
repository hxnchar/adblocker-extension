import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import SignUp from './components/pages/register';
import Login from './components/pages/login';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path='/' element={< Home />}></Route> */}
        <Route exact path='/register' element={<SignUp />} />
        <Route exact path='/login' element={< Login />} />
      </Routes>
    </Router>
  );
}

export default App;

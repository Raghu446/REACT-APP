import './App.css';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import Routes from './Routes';


const browserHistory = createBrowserHistory();


function App() {
  return (
    
      <Router history={browserHistory}>
        STUDENT APPLICATION
        <Routes />
      </Router>
  
    
  );
}
export default App
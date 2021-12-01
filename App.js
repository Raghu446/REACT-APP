import './App.css';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import Routes from './Routes';
// import AdmissionTable from './Components/AdmissionTable';


const browserHistory = createBrowserHistory();


function App() {
  // return (
  // <div>
  //   <AdmissionTable></AdmissionTable>
  // </div>
  return (
    
      <Router history={browserHistory}>
        <Routes />
      </Router>
      // <admincolumns></admincolumns>
    
  );
}
export default App
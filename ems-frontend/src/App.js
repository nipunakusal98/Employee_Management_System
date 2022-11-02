//import logo from './logo.svg';
import './App.css';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

//import {Routes,Route} from "react-router-dom";


function App() {
  return (
    <div>
      <HeaderComponent/>
        <div className="container">
          <Router>
            <Routes>
              <Route path="/"element={<ListEmployeeComponents/>}></Route>
              <Route path="/employees"element={<ListEmployeeComponents/>}></Route>
              <Route path ="/add-employee" element={<CreateEmployeeComponent/>}></Route>
            </Routes> 
          </Router>
       </div>
       <FooterComponent/>
    </div>
    
  );
}

export default App;

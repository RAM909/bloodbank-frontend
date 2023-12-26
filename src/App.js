import './App.css';
import PatEdit from './components/edit';
import EmpListing from './components/listing';
import Login from "./components/Login";
import PatListing2 from './components/listing2';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dash" element={<EmpListing />} />
          <Route path='/patients/edit/:_id' element={<PatEdit />} />
          <Route path='/Dash2' element={<PatListing2 />} />


        </Routes>
      </Router>
    </div>
  );
}


export default App;

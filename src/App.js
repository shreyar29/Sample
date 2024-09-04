import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Emptable from "./Components/EmpTable";
import { Route, Routes } from "react-router-dom";
import AddEmp from "./Components/AddEmp";
import EditEmp from "./Components/EditEmp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Emptable />}></Route>
        <Route path="/addemp" element={<AddEmp />}></Route>
        <Route path="/editemp" element={<EditEmp />}></Route>
      </Routes>
    </div>
  );
}

export default App;

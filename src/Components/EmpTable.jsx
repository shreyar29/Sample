import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./EmpTable.css";


function Emptable() {
  const navigate = useNavigate();

  const Addemp = () => {
    navigate("/addemp");
  };

  const Editemp =() =>{
    navigate("/editemp")
  }

  return (
    <div>
      <strong>
        <h1>Employee Details</h1>
      </strong>
      <div className="button-container">
        <Button className="b1" onClick={Addemp}>
          Add
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SL No</th>
            <th>Name</th>
            <th>Dept Name</th>
            <th>Age</th>
            <th>Phone number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Anusha</td>
            <td>IT</td>
            <td>20</td>
            <td>1234567890</td>
            <td>
              <Button variant="primary" onClick={Editemp}>Edit</Button>
            </td>
            <td>
              <Button variant="primary">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Meghana</td>
            <td>IT</td>
            <td>20</td>
            <td>4574567890</td>
            <td>
              <Button variant="primary" onClick={Editemp}>Edit</Button>
            </td>
            <td>
              <Button variant="primary">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Chaithra</td>
            <td>IT</td>
            <td>20</td>
            <td>1236667890</td>
            <td>
              <Button variant="primary" onClick={Editemp}>Edit</Button>
            </td>
            <td>
              <Button variant="primary">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Hrushitha</td>
            <td>IT</td>
            <td>20</td>
            <td>4563256790</td>
            <td>
              <Button variant="primary" onClick={Editemp}>Edit</Button>
            </td>
            <td>
              <Button variant="primary">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Impana</td>
            <td>IT</td>
            <td>20</td>
            <td>1278967890</td>
            <td>
              <Button variant="primary" onClick={Editemp}>Edit</Button>
            </td>
            <td>
              <Button variant="primary">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Mubeena</td>
            <td>IT</td>
            <td>20</td>
            <td>4878967890</td>
            <td>
              <Button variant="primary" onClick={Editemp}>Edit</Button>
            </td>
            <td>
              <Button variant="primary">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Mehreen</td>
            <td>IT</td>
            <td>20</td>
            <td>1237894510</td>
            <td>
              <Button variant="primary" onClick={Editemp}>Edit</Button>
            </td>
            <td>
              <Button variant="primary">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Shreya</td>
            <td>IT</td>
            <td>20</td>
            <td>1479667890</td>
            <td>
              <Button variant="primary" onClick={Editemp}>Edit</Button>
            </td>
            <td>
              <Button variant="primary">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Jay</td>
            <td>IT</td>
            <td>20</td>
            <td>1234567890</td>
            <td>
              <Button variant="primary" onClick={Editemp}>Edit</Button>
            </td>
            <td>
              <Button variant="primary">Delete</Button>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>Darsh</td>
            <td>IT</td>
            <td>20</td>
            <td>8123455790</td>
            <td>
              <Button variant="primary" onClick={Editemp}>Edit</Button>
            </td>
            <td>
              <Button variant="primary">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Emptable;

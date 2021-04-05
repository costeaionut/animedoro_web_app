import logo from './logo.svg';
import './App.css';
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <div className="App-content">
      <Navbar >
  <Navbar.Brand href="#home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">bunton 1</Nav.Link>
      <Nav.Link href="#link">buton 2</Nav.Link>
      <NavDropdown title="MENU" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<div className="Cronometru">
  Content
</div>

    </div>
    </div>
  );
}

export default App;

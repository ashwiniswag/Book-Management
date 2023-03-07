import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';

const Menubar = ({showModal}) => {
    return (
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Book Manager</Navbar.Brand>
          <Button variant="outline-success" onClick={() => showModal(true)}>Add Book</Button>
        </Container>
      </Navbar>
    );
}

export default Menubar;
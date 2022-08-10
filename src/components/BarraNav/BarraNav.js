import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'
import './BarraNav.css'

function BarraNav () {
    return ( 
    
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"> <img className='logo' src="../Image/raisonlogo.jpg" alt="Raison Logo"/> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to= 'categoria/ofertas' >Ofertas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to= 'categoria/hogar'>
                Hogar
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to= 'categoria/deco'>Deco</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Contacto</Nav.Link>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
          </Container>
      </Navbar>
      
    );
}

export default BarraNav;


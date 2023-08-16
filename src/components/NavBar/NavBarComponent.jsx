import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartIcon from '../CartIcon/CartIconComponent';

function NavBarComponent() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">EP - Estructuras Metálicas</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#servicios">Servicios</Nav.Link>
            <Nav.Link href="#precio">Precios</Nav.Link>
          </Nav>
        </Container>
        <CartIcon />
      </Navbar>
    </>
  );
}

export default NavBarComponent;
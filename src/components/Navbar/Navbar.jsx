import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ColorSchemesExample() {
  return (
    <>
      <Navbar expand="lg" bg="secondary" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">Kadikuyusu.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Anasayfa</Nav.Link>
              <Nav.Link href="#">Galeri</Nav.Link>
              <Nav.Link href="#">Biz</Nav.Link>
              <NavDropdown title="Duyurular" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Tarım</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Hayvancılık
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  Düğün <br /> Merasim <br /> Cenaze
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Iletisim</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;

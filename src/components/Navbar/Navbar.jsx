import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function CustomNavbar() {
  const [duyuruDetailsVisible, setDuyuruDetailsVisible] = React.useState(false);

  const showDetails = () => {
    setDuyuruDetailsVisible(true);
  };

  const hideDetails = () => {
    setDuyuruDetailsVisible(false);
  };

  return (
    <>
      <Navbar className='navbarTop' expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">Kadikuyusu.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbarMenuArea">
                <li className="nav-item">
                  <NavLink className='nav-link navbarMenus' to='/' activeClassName='active'>Anasayfa</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className='nav-link navbarMenus' to='/galeri' activeClassName='active'>Galeri</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className='nav-link navbarMenus' to='/biz' activeClassName='active'>Biz!</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className='nav-link navbarMenus' to='/iletisim' activeClassName='active'>Iletisim</NavLink>
                </li>
              <NavDropdown className='navbarMenu text-white text-bold' title="Duyurular" id="basic-nav-dropdown">
                <NavDropdown.Item href='/duyurular/tarim'>Tarım</NavDropdown.Item>
                <NavDropdown.Item href='/duyurular/hayvancilik'>Hayvancılık</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onMouseLeave={hideDetails}
                >
                  {!duyuruDetailsVisible && (
                    <span onMouseOver={showDetails}>
                      Genel Duyurular
                    </span>
                  )}
                  {duyuruDetailsVisible && (
                    <div>
                      Düğün<br />
                      Merasim<br />
                      Cenaze
                    </div>
                  )}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;

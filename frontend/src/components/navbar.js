import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLogout } from '../hooks/useLogout';
import {useAuthContext} from '../hooks/useAuthContext'


function navbar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {logout} = useLogout()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {user} = useAuthContext()

  const HandleClick = () => {
    logout()
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/explore">Explore</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            
            {!user && (
            <NavDropdown title="Account" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/signup">Sign up</NavDropdown.Item>
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
            </NavDropdown>
              )}
              {user && (
              <><NavDropdown title="Name" id="navbarScrollingDropdown">
                <span>{user.email}</span>
                <NavDropdown.Item href="/login">Account config</NavDropdown.Item>
                <Button onClick={HandleClick}>Log out</Button>
              </NavDropdown></>
               )}
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;
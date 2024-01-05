import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Navigation({ links }) {
  return (
    <Navbar
      variant="dark"
      expand="md"
      collapseOnSelect
      className="bg-dark fixed-top"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <span>Arman Barseghyan</span>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar=-nav">
          <Nav className="ms-auto">
            {links.map((link, i) => (
              <LinkContainer key={i} to={link.path}>
                <Nav.Link>{link.title}</Nav.Link>
              </LinkContainer>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

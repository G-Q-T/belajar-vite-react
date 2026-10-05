import { Container,Nav,Navbar,Button,NavDropdown } from "react-bootstrap";

export default function AppNavbar(){

    return (
    <Navbar expand="lg" bg="dark" variant="dark" className="shadow-sm mb-4">
      <Container>
        <Navbar.Brand href="#home">PPKD JP Sasa Lele</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Dashboard">Home</Nav.Link>
            <Nav.Link href="/Login">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/User">user</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="align-items-center gap-2">
            <Navbar.Text className="text-secondary me-2">Admin</Navbar.Text>
            <Button variant="outline-warning" size ="sm" href="/Login">Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}
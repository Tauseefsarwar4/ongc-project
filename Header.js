import {Container, Form, FormControl, Nav, Navbar} from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><b>ASK FROM EXPERT</b></Navbar.Brand>
       {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
       <Nav>
        <Form inline>
            <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2" />
        </Form>
       </Nav>
       {/* <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
           <NavDropdown title="Select" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">C</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                C++
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Java</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Python
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  )
}

export default Header
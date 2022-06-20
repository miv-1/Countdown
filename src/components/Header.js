import React, { useEffect } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

function Header() {
  const [user, setUser] = React.useState(null);

  const json = localStorage.getItem('userTokenTime') || null;
  const token = json ? JSON.parse(json).token : null;
  const username = token ? JSON.parse(json).username : null;

  useEffect(() => {
    if (token) {
      setUser({ username: username });
    }
  }, [token]);

  const logout = () => {
    localStorage.removeItem('userTokenTime');
    setUser(null);
    window.location.reload()
  };

  const login = () => {
    window.location.href = '/login'
  };

  return (
    <div>
      <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
          <Container>
            <Navbar.Brand href="/home">uuVideoLibrary</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                {user ? <Nav.Link href="/myVideos">My videos</Nav.Link> : ""}
              </Nav>
              <Nav className="mr-auto">
                <Nav.Link href="/upload">Upload</Nav.Link>
              </Nav>
              <Nav className="justify-content-end" style={{ width: "100%" }}>
                {
                  user
                    ? (<Button variant="secondary" onClick={logout}>Log {user.username} out</Button>)
                    : (<Button variant="primary" onClick={login}>Log in</Button>)
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  )
}

export default Header

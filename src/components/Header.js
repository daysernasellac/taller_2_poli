import { Container, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    News-APIS
                </Navbar.Brand>

                <Navbar.Text onClick={(e) => console.log("login triggered")}>
                    Login
                </Navbar.Text>
            </Container>
        </Navbar>
    );
};

export default Header;

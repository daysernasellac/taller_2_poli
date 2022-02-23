import { Container, Navbar } from "react-bootstrap";

import "./header.css";
const Header = ({ user, puntuacion, handleExit }) => {
    return (
        <Navbar bg="dark" variant="dark" id="header">
            <Container fluid className="controls-container">
                <Navbar.Brand href="/">
                    {user ? (
                        <Navbar.Text className="user-controls">
                            Jugador: {user.nombre}
                        </Navbar.Text>
                    ) : null}
                </Navbar.Brand>

                <Navbar.Text>Ganancias: {puntuacion}</Navbar.Text>
                {user ? (
                    <Navbar.Text
                        className="user-controls logout"
                        onClick={handleExit}
                    >
                        Salir
                    </Navbar.Text>
                ) : null}
            </Container>
        </Navbar>
    );
};

export default Header;

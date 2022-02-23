import { Container, Navbar } from "react-bootstrap";

import "./header.css";
const Header = ({ user, puntuacion, handleExit }) => {
    return (
        <Navbar bg="dark" variant="dark" id="header">
            <Container fluid className="controls-container">
                <Navbar.Brand href="/">
                    <Navbar.Text className="user-controls">
                        Jugador:
                        <span className="special-text">{user?.nombre}</span>
                    </Navbar.Text>
                </Navbar.Brand>

                <Navbar.Text>
                    Ganancias:
                    <span className="special-text">{puntuacion}</span>
                </Navbar.Text>
                <Navbar.Text>
                    Nivel:
                    <span className="special-text">
                        {user?.dificultad?.label}
                    </span>
                </Navbar.Text>
                <Navbar.Text
                    className="user-controls logout"
                    onClick={handleExit}
                >
                    Salir
                </Navbar.Text>
            </Container>
        </Navbar>
    );
};

export default Header;

import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/layout";
import { AuthProvider } from "./common/auth";
import Login from "./game/login/Login";

import "./App.css";
import Preguntas from "./components/preguntas/preguntas";
import PreguntasItem from "./components/preguntas/preguntas-item";
import Finish from "./game/finish/finish";

const App = () => {
    return (
        <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route
                path="/"
                element={
                    <RequiredAuth redirectTo="/login">
                        <Layout />
                    </RequiredAuth>
                }
            >
                <Route path="/trivia" element={<Preguntas />}>
                    <Route path=":pregunta" element={<PreguntasItem />} />
                </Route>
            </Route>
            <Route exact path="/finish" element={<Finish />} />
        </Routes>
    );
};

const RequiredAuth = ({ children, redirectTo }) =>
    AuthProvider.isAuth() ? children : <Navigate to={redirectTo} />;

export default App;

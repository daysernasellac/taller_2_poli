import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { AuthProvider } from "./common/auth";
import Login from "./game/login/Login";

import "./App.css";
import Preguntas from "./components/preguntas/Preguntas";
const App = () => {
    // const [inputNombre, setInputNombre] = useState("");
    // const [articles, setArticles] = useState([]);
    // top-headlines?country=${COUNTRY}&category=${category}&apiKey=${APIKEY}`;

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
                <Route path="/trivia" element={<Preguntas />} />
            </Route>
        </Routes>
    );
};

const RequiredAuth = ({ children, redirectTo }) =>
    AuthProvider.isAuth() ? children : <Navigate to={redirectTo} />;

export default App;

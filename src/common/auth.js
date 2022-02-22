export const AuthProvider = {
    logIn: function ({ usuario, categoria, dificultad }) {
        if (!usuario || !categoria || !dificultad) return false;
        let newUser = JSON.stringify({
            usuario,
            categoria,
            dificultad,
        });

        localStorage.setItem("USER", newUser);

        return true;
    },
    logOut: function () {
        localStorage.removeItem("USER");
    },
    isAuth: function () {
        return localStorage.getItem("USER");
    },
};

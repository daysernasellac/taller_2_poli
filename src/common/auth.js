export const AuthProvider = {
    logIn: function ({ usuario, categoria, dificultad }) {
        localStorage.setItem("USER", {
            usuario,
            categoria,
            dificultad,
        });
    },
    logOut: function () {
        localStorage.removeItem("USER");
    },
    isAuth: function () {
        return localStorage.getItem("USER");
    },
};

export const AuthProvider = {
    logIn: function ({ nombre, categoria, dificultad }) {
        if (!nombre || !categoria || !dificultad) return false;

        let newUser = JSON.stringify({
            nombre,
            categoria,
            dificultad,
        });

        localStorage.setItem("USER", newUser);

        return true;
    },
    logOut: function (cb) {
        localStorage.removeItem("USER");

        return cb(true);
    },
    isAuth: function () {
        return localStorage.getItem("USER");
    },
};

const userController = require("../controllers/user.controller");

module.exports = (app) => {
    app.post("/api/users/login", userController.login);
    app.post("/api/users/register", userController.register);
    app.get("/api/users/logout", userController.logout);
    app.get("/api/users", userController.getLoggedInUser);
};

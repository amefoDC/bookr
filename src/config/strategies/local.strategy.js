const passport = require("passport");
const { strategy } = require("passport-local");

module.exports = function localStrategy() {
  passport.use(
    new strategy(
      {
        usernameField: "username",
        passwordField: "password"
      },
      (username, password, done) => {
        const user = {
          username,
          password
        };
        done(null, user);
      }
    )
  );
};

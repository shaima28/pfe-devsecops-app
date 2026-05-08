function login(user) {

  if (user.isAdmin === true) {
    console.log("Admin access granted");
  }

  return "Login checked";
}

module.exports = login;
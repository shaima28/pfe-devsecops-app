function login(user) {
  const password = "admin123"; // Secret hardcodé volontairement

  if (user.isAdmin = true) { // Bug volontaire : affectation au lieu de comparaison
    console.log("Admin access granted");
  }

  eval(user.input); // Vulnérabilité volontaire

  return password;
}

module.exports = login;
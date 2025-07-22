exports.isAuthenticated = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.redirect('/home'); // If token not present, block access
  }

  next(); // Allow access
};

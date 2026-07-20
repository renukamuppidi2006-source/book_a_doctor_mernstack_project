const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Doctor = require('../models/Doctor');
const Admin = require('../models/Admin');

// Verify token authentication
const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Look up user across collections
      let dbUser = await Admin.findById(decoded.id);
      let role = 'admin';

      if (!dbUser) {
        dbUser = await Doctor.findById(decoded.id);
        role = 'doctor';
      }

      if (!dbUser) {
        dbUser = await User.findById(decoded.id);
        role = dbUser ? dbUser.role : 'patient';
      }
      
      if (!dbUser) {
        return res.status(401).json({ success: false, message: 'Not authorized, user not found' });
      }
      
      // Populate request user
      req.user = {
        _id: dbUser._id,
        name: dbUser.name,
        email: dbUser.email,
        role: role,
      };
      
      next();
    } catch (error) {
      console.error('JWT Verification Error:', error.message);
      return res.status(401).json({ success: false, message: 'Not authorized, token expired or invalid' });
    }
  }

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized, no token provided' });
  }
};

// Check user role permissions
const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Role (${req.user ? req.user.role : 'guest'}) is not authorized to access this route`,
      });
    }
    next();
  };
};

module.exports = { protect, restrictTo };

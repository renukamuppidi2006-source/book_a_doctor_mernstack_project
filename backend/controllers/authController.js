const User = require('../models/User');
const Doctor = require('../models/Doctor');
const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

// Helper to generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// Register User (patient/doctor/admin)
const registerUser = async (req, res) => {
  try {
    const { name, email, password, role, phone, specialization, experience, consultationFee, hospital, about } = req.body;

    // Check if email already registered across collections
    const userExists = await User.findOne({ email });
    const doctorExists = await Doctor.findOne({ email });
    const adminExists = await Admin.findOne({ email });

    if (userExists || doctorExists || adminExists) {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }

    let account;
    let finalRole = role || 'patient';

    if (finalRole === 'doctor') {
      account = await Doctor.create({
        name,
        email,
        password,
        specialization: specialization || 'General Physician',
        experience: experience ? Number(experience) : 2,
        consultationFee: consultationFee ? Number(consultationFee) : 50,
        hospital: hospital || 'General Clinic',
        about: about || 'Dedicated practitioner.',
      });
    } else if (finalRole === 'admin') {
      account = await Admin.create({
        name,
        email,
        password,
      });
    } else {
      // Patient registration (User schema)
      if (!phone) {
        return res.status(400).json({ success: false, message: 'Phone number is required for patient registration.' });
      }
      account = await User.create({
        name,
        email,
        password,
        phone,
        role: 'patient',
      });
    }

    res.status(201).json({
      success: true,
      token: generateToken(account._id),
      user: {
        _id: account._id,
        name: account.name,
        email: account.email,
        role: finalRole,
        image: account.profileImage || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Unified Login Handler
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    let account = await Admin.findOne({ email }).select('+password');
    let role = 'admin';

    if (!account) {
      account = await Doctor.findOne({ email }).select('+password');
      role = 'doctor';
    }

    if (!account) {
      account = await User.findOne({ email }).select('+password');
      role = account ? account.role : 'patient';
    }

    if (account && (await account.matchPassword(password))) {
      res.json({
        success: true,
        token: generateToken(account._id),
        user: {
          _id: account._id,
          name: account.name,
          email: account.email,
          role: role,
          image: account.profileImage || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        },
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Retrieve Profile Details
const getProfile = async (req, res) => {
  try {
    const id = req.user._id;

    let account = await Admin.findById(id);
    let role = 'admin';

    if (!account) {
      account = await Doctor.findById(id);
      role = 'doctor';
    }

    if (!account) {
      account = await User.findById(id);
      role = account ? account.role : 'patient';
    }

    if (!account) {
      return res.status(404).json({ success: false, message: 'User account not found' });
    }

    res.json({
      success: true,
      user: account,
      role: role,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Profile Details
const updateProfile = async (req, res) => {
  try {
    const id = req.user._id;
    let account;

    if (req.user.role === 'admin') {
      account = await Admin.findById(id);
      if (account) {
        account.name = req.body.name || account.name;
        await account.save();
      }
    } else if (req.user.role === 'doctor') {
      account = await Doctor.findById(id);
      if (account) {
        account.name = req.body.name || account.name;
        account.specialization = req.body.specialization || account.specialization;
        account.experience = req.body.experience !== undefined ? Number(req.body.experience) : account.experience;
        account.consultationFee = req.body.consultationFee !== undefined ? Number(req.body.consultationFee) : account.consultationFee;
        account.hospital = req.body.hospital || account.hospital;
        account.about = req.body.about || account.about;
        
        if (req.file) {
          account.profileImage = req.file.path;
        }

        await account.save();
      }
    } else {
      // Patient (User model)
      account = await User.findById(id);
      if (account) {
        account.name = req.body.name || account.name;
        account.phone = req.body.phone || account.phone;
        
        if (req.file) {
          account.profileImage = req.file.path;
        }

        await account.save();
      }
    }

    if (!account) {
      return res.status(404).json({ success: false, message: 'Account not found' });
    }

    res.json({
      success: true,
      user: {
        _id: account._id,
        name: account.name,
        email: account.email,
        role: req.user.role,
        image: account.profileImage || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
};

const express = require('express');
const { register, forgotPassword, resetPassword, verifyToken } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.post('/forgot-password', forgotPassword);
router.get('/verify-token/:token', verifyToken);
router.post('/reset-password/:token', resetPassword);

module.exports = router;

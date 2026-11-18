const Contact = require('../models/Contact');
const sendEmail = require('../utils/sendEmail');

const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    try {
      await Contact.create({ name, email, subject, message });
    } catch (dbErr) {
      console.log('DB save skipped:', dbErr.message);
    }

    try {
      await sendEmail({ name, email, subject, message });
    } catch (emailErr) {
      console.log('Email send skipped:', emailErr.message);
    }

    res.status(201).json({ success: true, message: 'Message received! I will get back to you soon.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
};

module.exports = { submitContact };

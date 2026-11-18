const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  technologies: [String],
  github: String,
  demo: String,
  featured: { type: Boolean, default: false },
  order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Project', projectSchema);

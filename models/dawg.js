var mongoose = require('mongoose');

var dawgSchema = new mongoose.Schema({
  name: { type: String, required: true },
  favoritetoy: String,
  created_at: Date,
  updated_at: Date
});

// Method to "say hello"
dawgSchema.methods.sayWhatup = function() {
  console.log("What's up " + this.name + '! Time to fetch some ' + this.favoritetoy + ', if you know what I\'\m sayin.');
};


var Dawg = mongoose.model('Dawg', dawgSchema);

// Make this available to our other files
module.exports = Dawg;

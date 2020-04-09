let mongoose = require( 'mongoose' );

let citiesworldchema = new mongoose.Schema({
  city: {type: String, required: true},
  country: {type: String, required: true, default: "Неизвестная страна"},
  population: {type: String, required: true},
  territory: {type: String, required: true},
  dateFinish: {type: Date, required: true},
  statcity: {type: String, required: true}
});

mongoose.model('cities', citiesworldchema );


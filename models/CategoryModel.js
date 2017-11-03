var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var categorySchema = new Schema({
  pID: String,
  name:   String,
  status:   Number
});
var CategoryModel = mongoose.model('category', userSchema);
export default CategoryModel;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var categorySchema = new Schema({
  name:   String,
  status:   Number
});
var CategoryModel = mongoose.model('category', categorySchema);
export default CategoryModel;
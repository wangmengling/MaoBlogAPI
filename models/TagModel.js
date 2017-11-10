var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var tagSchema = new Schema({
  name:   String,
  status:   Number
});
var TagModel = mongoose.model('tag', tagSchema);
export default TagModel;
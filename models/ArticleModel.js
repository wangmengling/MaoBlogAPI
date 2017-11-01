var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var articleSchema = new Schema({
  title: String,
  username:  String,
  summary: String,
  content:   String,
  category: Number,
  tag: String,
  comments: [{ body: String, date: Date }],
  time: { type: Date, default: Date.now },
  hidden: Boolean,
  status:Number,
  view:Number
});
var ArticleModel = mongoose.model('article', articleSchema);
export default ArticleModel;
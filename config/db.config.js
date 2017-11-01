var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/maoBlog',{useMongoClient:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  // yay!
});


// var mongoose = require('mongoose'),
// DB_URL = 'mongodb://localhost:27017/maoBlog';

// /**
// * 连接
// */
// mongoose.connect(DB_URL);

// /**
// * 连接成功
// */
// mongoose.connection.on('connected', function () {    
//     console.log('Mongoose connection open to ' + DB_URL);  
// });    

// /**
// * 连接异常
// */
// mongoose.connection.on('error',function (err) {    
//     console.log('Mongoose connection error: ' + err);  
// }); 
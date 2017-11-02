
import Send from 'koa-send';
import Article from "./article"
import Admin from "./admin";
module.exports =  (router) => {
  
  Admin(router);
  // Article(router);
}



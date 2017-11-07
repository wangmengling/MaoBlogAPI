
import Send from 'koa-send';
import Article from "./article"
import Admin from "./admin";
module.exports =  (router) => {
  router.prefix('/api/v1')
  Admin(router);
  Article(router);
}



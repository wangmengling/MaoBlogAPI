import Send from 'koa-send';
import Users from "./users"
import Article from "./article"
module.exports =  (router) => {
  router.prefix('/api/v1/admin')
  Users(router);
  Article(router);
}

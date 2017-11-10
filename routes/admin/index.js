import Send from 'koa-send';
import Users from "./users"
import Article from "./article"
import Category from "./category";
import Tag from "./tag";
module.exports =  (router) => {
  // router.prefix('/api/v1/admin')
  Users(router);
  Article(router);
  Tag(router);
  Category(router);
}

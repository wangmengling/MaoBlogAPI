
import Send from 'koa-send';
// import UserController from "../controller/ArticleController"
import ArticleController from "../controller/ArticleController"
import Users from "./users"
module.exports =  (router) => {
  router.prefix('/api/v1')
  router.get('/welcome', async function (ctx, next) {
    ctx.state = {
      title: 'koa2 title'
    };

    await ctx.render('welcome', {title: ctx.state});
  });

  router.get('/article/list',ArticleController.articleList);

  Users(router);
}



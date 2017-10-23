
import Send from 'koa-send';
import UserController from "../controller/ArticleController"
module.exports =  (router) => {
  router.get('/welcome', async function (ctx, next) {
    ctx.state = {
      title: 'koa2 title'
    };

    await ctx.render('welcome', {title: ctx.state});
  });

  router.get('/api/v1/article/list',UserController.articleList);
}



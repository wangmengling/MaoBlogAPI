
import Send from 'koa-send';
import Users from "./users"
import Article from "./article"
module.exports =  (router) => {
  router.prefix('/api/v1')
  router.get('/welcome', async function (ctx, next) {
    ctx.state = {
      title: 'koa2 title'
    };

    await ctx.render('welcome', {title: ctx.state});
  });
  Users(router);
  Article(router);
}



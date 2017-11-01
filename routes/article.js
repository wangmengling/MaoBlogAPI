import ArticleController from "../controller/ArticleController";
module.exports =  (router) => {
    // router.get('/user', async function (ctx, next) {
    //   ctx.body = 'this a users response!';
    // })

    router.get('/article/list',ArticleController.articleList);
    router.get('/article/add',ArticleController.addArticle);
  }
import ArticleController from "../controller/ArticleController";
module.exports =  (router) => {
    // router.get('/user', async function (ctx, next) {
    //   ctx.body = 'this a users response!';
    // })
    // router.prefix('/api/v1')
    router.post('/article/list',ArticleController.articleList);
    router.post('/article/detail',ArticleController.articleDetail);
    router.get('/article/add',ArticleController.addArticle);
}
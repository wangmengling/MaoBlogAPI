import ArticleController from "../controller/ArticleController";
module.exports =  (router) => {
    // router.get('/user', async function (ctx, next) {
    //   ctx.body = 'this a users response!';
    // })
    router.prefix('/api/v1')
    router.post('/article/list',ArticleController.articleList);
    router.post('/article/detail',ArticleController.articleDetail);
    router.post('/article/add',ArticleController.addArticle);
}
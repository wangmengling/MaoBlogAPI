import ArticleController from "../../controller/ArticleController";
import tokenContent from '../Auth';
module.exports =  (router) => {
    router.post('/article/list',tokenContent,ArticleController.articleList);
    router.post('/article/detail',tokenContent,ArticleController.articleDetail);
    router.get('/article/add',tokenContent,ArticleController.addArticle);
}
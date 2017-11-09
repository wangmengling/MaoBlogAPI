import ArticleController from "../../controller/ArticleController";
import tokenContent from '../Auth';
module.exports =  (router) => {
    router.post('/admin/article/list',tokenContent,ArticleController.articleList);
    router.post('/admin/article/detail',tokenContent,ArticleController.articleDetail);
    router.post('/admin/article/add',tokenContent,ArticleController.addArticle);
    router.post('/admin/article/delete',tokenContent,ArticleController.deleteArticle);
    router.post('/admin/article/update',tokenContent,ArticleController.updateArticle);
    
    
}
import CategoryController from "../../controller/CategoryController";
import tokenContent from '../Auth';
module.exports =  (router) => {
    router.post('/category/list',tokenContent,CategoryController.categoryList);
    router.get('/category/add',tokenContent,CategoryController.categoryAdd);
}
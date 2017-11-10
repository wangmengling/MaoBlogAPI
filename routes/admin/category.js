import CategoryController from "../../controller/CategoryController";
import tokenContent from '../Auth';
module.exports =  (router) => {
    router.post('/admin/category/list',tokenContent,CategoryController.categoryList);
    router.post('/admin/category/add',CategoryController.categoryAdd);
}
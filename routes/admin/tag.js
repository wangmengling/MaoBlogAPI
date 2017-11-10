import TagController from "../../controller/TagController";
import tokenContent from '../Auth';
module.exports =  (router) => {
    router.post('/admin/tag/list',tokenContent,TagController.tagList);
    router.post('/admin/tag/add',TagController.tagAdd);
}
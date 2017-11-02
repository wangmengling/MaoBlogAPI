
import ArticleModel from "../models/ArticleModel";
import {responseClient} from "../config/Utils";
class ArticleController {
    constructor() {
        
    }

    async articleList(ctx) {
        let { pageIndex, pageSize } = ctx.request.body;
        let articleData = await ArticleModel.find();
        let count = await ArticleModel.count();
        console.log(count);
        responseClient(ctx,200,200,"啊是打发斯蒂芬",{pageTotal:count/pageSize,list:articleData});
    }

    async addArticle(ctx) {
        let article = new ArticleModel({ title: 'small' });
        let articleData = await article.save()
        
        responseClient(ctx,200,200,"啊是打发斯蒂芬",articleData);
    }
}
export default new ArticleController();
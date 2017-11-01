
import ArticleModel from "../models/ArticleModel";
import {responseClient} from "../config/Utils";
class ArticleController {
    constructor() {
        
    }

    async articleList(ctx) {
        let articleData = await ArticleModel.find();
        responseClient(ctx,200,200,"",articleData);
    }

    async addArticle(ctx) {
        let article = new ArticleModel({ title: 'small' });
        let articleData = await article.save()
        responseClient(ctx,200,200,"",articleData);
    }
}
export default new ArticleController();
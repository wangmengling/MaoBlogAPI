
import ArticleModel from "../models/ArticleModel";
class ArticleController {
    constructor() {
        
    }

    async articleList(ctx) {
        let articleData = await ArticleModel.find();
        ctx.body = articleData;
    }

    async addArticle(ctx) {
        let article = new ArticleModel({ title: 'small' });
        let articleData = await article.save()
        ctx.body = articleData;
    }
}
export default new ArticleController();
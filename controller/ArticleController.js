
import ArticleModel from "../models/ArticleModel";
import {responseClient} from "../config/Utils";
import ResponseData from "../config/ResponseData";
class ArticleController {
    constructor() {
        
    }

    async articleList(ctx) {
        let { pageIndex, pageSize } = ctx.request.body;
        try {
            let articleData = await ArticleModel.find().skip(pageIndex * pageSize).limit(pageSize);
            let count = await ArticleModel.count();
            responseClient(ctx,"",{pageTotal:Math.ceil(count/pageSize),list:articleData});
        } catch (error) {
            responseClient(ctx,error.message,{},0);
        }
    }

    async articleDetail(ctx) {
        let { _id } = ctx.request.body;
        if (!_id) {
            responseClient(ctx,"请传入文章ID",{},0);
        }else {
            try {
                let articleDetailData = await ArticleModel.findById(_id);
                if (articleDetailData) {
                    responseClient(ctx,"",articleDetailData);
                }else {
                    responseClient(ctx,"没有相关文章",{},0);
                }
            } catch (error) {
                responseClient(ctx,error.message,{},0);
            }
        }
    }

    async addArticle(ctx) {
        let article = new ArticleModel({ title: 'small' });
        let articleData = await article.save()
        responseClient(ctx,200,200,"",articleData);
    }
}
export default new ArticleController();

import ArticleModel from "../models/ArticleModel";
import {responseClient} from "../config/Utils";
class ArticleController {
    constructor() {
        
    }

    async articleList(ctx) {
        ctx.type = 'json';
        let { pageIndex, pageSize } = ctx.request.body;
        try {
            console.log(pageSize);
            let articleData = await ArticleModel.find().skip(pageIndex * pageSize).limit(pageSize);
            let count = await ArticleModel.count();
            count = 18;
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
        ctx.type = 'json';
        let { title, content, category, tag} = ctx.request.body;
        let time = Date.parse(new Date()) ;
        let article = new ArticleModel({
            username: 'wangguozhong',
            // 简介
            summary: title,
            // 内容
            content: content,
            // 时间
            time : time,
            // 标题
            title: title,
            category: category,
            tag: tag
        });
        try {
            let articleData = await article.save();
            responseClient(ctx,"添加成功",articleData);
        } catch (error) {
            responseClient(ctx,"添加失败",error,0,500);
        }
    }

    async deleteArticle(ctx) {
        ctx.type = 'json';
        let params = {_id:ctx.request.body.articleId};
        let article = new Article(params);
        try {
            let ret = await article.remove();
            let data;
            if (ret) {
                ctx.session.article = ret;
                responseClient(ctx,"删除成功",ret);
            }
            else {
                responseClient(ctx,"删除失败",ret,0);
            }
        } catch (error) {
            responseClient(ctx,"删除失败",ret,0,500);
        }
        
    }
}
export default new ArticleController();
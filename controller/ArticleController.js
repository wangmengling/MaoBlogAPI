class ArticleController {
    constructor() {
        
    }

    async articleList(ctx) {
        ctx.body = {user:"wangguozhong"};
    }
}
export default new ArticleController();
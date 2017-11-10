import CategoryModel from "../models/CategoryModel";
import { responseClient } from "../config/Utils";
class CategoryController {
    async categoryAdd(ctx) {
        ctx.type = 'json';
        let { name} = ctx.request.body;
        let category = new CategoryModel({ "name":name, "status":1 });
        
        try {
            let ret = await CategoryModel.findOne({ "name": name });
            if (ret) {
                responseClient(ctx,"该分类已经存在",ret);
            }
            else {
                console.log(category);
                let data = await category.save();
                if (data) {
                    responseClient(ctx,"分类添加成功",ret);
                }else {
                    responseClient(ctx,"分类添加失败",ret,0);
                }
            }
        } catch (error) {
            responseClient(ctx,error.message,"",0,error.code);
        }
    }

    async categoryList(ctx) {
        ctx.type = 'json';
        let { status } = ctx.request.body;
        let category = new CategoryModel();
        try {
            let data = await CategoryModel.find({ "status":status });
            if (data.length > 0) {
                responseClient(ctx,"",data);
            }
            else {
                responseClient(ctx,"",data,0);
            }
        } catch (error) {
            responseClient(ctx,error.message,"",0,error.code);
        }
    }
}

export default new CategoryController();
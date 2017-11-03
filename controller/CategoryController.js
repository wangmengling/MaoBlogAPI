import CategoryModel from "../models/CategoryModel";
import { responseClient } from "../config/Utils";
class CategoryController {
    async categoryAdd(ctx) {
        ctx.type = 'json';
        let { name, pID } = ctx.request.body;
        let category = new CategoryModel({ "name":name, "pID":pID, "status":1 });
        try {
            let ret = await CategoryModel.findOne({ "name": name });
            if (ret._id) {
                responseClient(ctx,"该分类已经存在",ret);
            }
            else {
                responseClient(ctx,"分类添加成功",ret,0);
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
import TagModel from "../models/TagModel";
import { responseClient } from "../config/Utils";
class TagController {
    async tagAdd(ctx) {
        ctx.type = 'json';
        let { name, pID } = ctx.request.body;
        let tag = new TagModel({ "name":name, "status":1 });
        try {
            let ret = await TagModel.findOne({ "name": name });
            if (ret) {
                responseClient(ctx,"该标签已经存在",ret);
            }
            else {
                let data = await tag.save();
                if (data) {
                    responseClient(ctx,"标签添加成功",ret);
                }else {
                    responseClient(ctx,"标签添加失败",ret,0);
                }
            }
        } catch (error) {
            responseClient(ctx,error.message,"",0,error.code);
        }
    }

    async tagList(ctx) {
        ctx.type = 'json';
        let { status } = ctx.request.body;
        let tag = new TagModel();
        try {
            let data = await TagModel.find({ "status":status });
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

export default new TagController();
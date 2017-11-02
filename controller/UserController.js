import UserModel from '../models/UserModel';
import jwt from 'jsonwebtoken';
import { secret } from "../config";
class UserController {
    constructor() {

    }

    async register(ctx) {
        let data;
        let { username, password } = ctx.request.body;
        ctx.body = ctx.request.body;
        let user = new UserModel({ "username":username, "password":password });
        try {
            let ret = await UserModel.find({ "username": username });
            
            if (ret.length > 0) {
                data = {
                    code: 200,
                    msg: "用户名已存在",
                    data:{'username':ret.username}
                };
            } else {
                user.token = jwt.sign({
                    user_id: user.username,
                    }, secret, {
                    expiresIn: '12h' //那么decode这个token的时候得到的过期时间为 : 创建token的时间 +　设置的值
                })
                let ret = await user.save();
                data = {
                    code: 200,
                    msg: "注册成功",
                    data:{'username':username,'token':user.token}
                };
            }
        } catch (error) {
            data = {
                code: 500,
                error:error.message,
                msg: "注册错误"
            };
        }
        ctx.body = data;
    }

    async login(ctx) {
        ctx.type = 'json';
        let { username, password } = ctx.request.body;
        let user = new UserModel({ "username":username, "password":password });
        try {
            let ret = await UserModel.findOne({ "username": username });
            let data;
            if (ret._id) {
                const token = jwt.sign({
                    user_id: ret._id,
                    }, secret, {
                    expiresIn: '12h' //过期时间设置为60妙。那么decode这个token的时候得到的过期时间为 : 创建token的时间 +　设置的值
                });
                await UserModel.update({ _id: ret._id }, { $set: { token: token }});
                ret.token = token
                data = {
                    code: 200,
                    data: ret,
                    token: token,
                    msg: "登录成功"
                };
            }
            else {
                data = {
                    code: 0,
                    msg: "用户名或密码错误",
                    data:ret._id
                };
            }

            ctx.status = 200
            ctx.body = data;
        } catch (error) {
            
        }
    }
}


export default new UserController();
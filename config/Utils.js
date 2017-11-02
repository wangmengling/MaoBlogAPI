import crypto from 'crypto'

module.exports = {
    MD5_SUFFIX: 'eiowafnajkdlfjsdkfj大姐夫文姐到了困难额我积分那看到你@#￥%……&）（*&……）',
    md5: function (pwd) {
        let md5 = crypto.createHash('md5');
        return md5.update(pwd).digest('hex')
    },
    responseClient(ctx,message='服务端异常',data={}, code = 1, httpCode = 200) {
        let responseData = {};
        responseData.code = code;
        responseData.message = message;
        responseData.data = data;
        ctx.status = httpCode;
        ctx.body = responseData;
    }

    
}

class ResponseData {
    constructor(code, msg) {
        this.code = code;
        this.msg = msg;
      }
}

let responseData = new ResponseData();
responseData.code
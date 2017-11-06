const allorCrossOrigin = async (ctx,next) => {
    let requestOrigin = ctx.header.origin
    console.log("--------");
    console.log(ctx.header.origin);
    console.log("--------");
    if(requestOrigin == 'http://localhost:4000' || requestOrigin == 'http://localhost:3001' ) {
        // ctx.set('Access-Control-Allow-Origin', "http://localhost:4000")
        ctx.set('Access-Control-Allow-Origin', "*")
        ctx.set('Access-Control-Allow-Methods', '*')
        ctx.set('Access-Control-Allow-Credential', true)
        ctx.set('Access-Control-Allow-Headers', 'Content-type')
    }
    ctx.request.method === 'OPTIONS'
      ? await (ctx.body = '')
      : await next()
}
module.exports = allorCrossOrigin
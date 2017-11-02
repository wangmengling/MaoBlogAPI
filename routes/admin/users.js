import tokenContent from '../Auth';
import UserController from "../../controller/UserController";
module.exports =  (router) => {
  router.get('/user',tokenContent, async function (ctx, next) {
    ctx.body = 'this a users response!';
  })

  router.post('/user/login',UserController.login);
  router.post('/user/register',UserController.register);
}

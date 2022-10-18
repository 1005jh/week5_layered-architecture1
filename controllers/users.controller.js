const UsersService = require('../services/users.service');
const { InvalidParamsError } = require('../exceptions/index.exception');

const joi = require('../exceptions/joiSchema');


class UsersController {
    constructor() {
      this.usersService = new UsersService();
    }
    userSignup = async (req, res, next) => {
        try {
          const result = joi.userSchema.validate(req.body);
          
    
          if (result.error) {
            throw new InvalidParamsError('형식에 맞게 모두 입력해주세요');
          }
          const { username, password, confirm } = result.value;
          console.log(username, password, confirm)
          const createUser = await this.usersService.createUser(
            username,
            password,
            confirm
          );
    
          res.status(201).json({
            msg: '회원가입에 성공하였습니다.',
          });
        } catch (error) {
          next(error);
        }
      };
      userLogin = async (req, res, next) => {
        try {
          const { username, password } = req.body;
    
          const user = await this.usersService.loginUser(username, password);
          
          res.cookie('accessToken', user[1]); // Access Token을 Cookie에 전달한다.
          res.cookie('refreshToken', user[2]);
          res.status(200).json({
            username: user[0].username,
            userId: user[0].userId,
            accessToken: user[1],
            refreshToken: user[0].refreshToken,
            msg: '로그인에 성공하였습니다.',
          });
        } catch (error) {
          next(error);
        }
      };

      confirmUser = async (req, res, next) => {
        try {
          const { userId, username } = res.locals.user;
          const { accessToken  } = res.locals;
    
          const existUser = await this.usersService.checkUser(userId);
            
          if (existUser.refreshToken === refreshToken){
            res.status(200).json({
                ok: true,
                msg: '로그인 유저 정보 확인',
                accessToken,
                refreshToken: existUser.refreshToken,
          });
          }
          
        } catch (error) {
          next(error);
        }
      };
}
module.exports = UsersController;
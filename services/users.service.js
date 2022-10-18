require('dotenv').config();
const UserRepository = require('../repositories/users.repository')
const { ValidationError } = require('../exceptions/index.exception');
const Joi = require('joi');
const jwt = require('jsonwebtoken');


class UsersService {
    constructor() {
      this.usersRepository = new UsersRepository();
    }
    
    createUser = async (username, password, confirm) => {
        if (password !== confirm) {
          throw new ValidationError('패스워드가 일치하지 않습니다.');
        }
    
        const findId = await this.UserRepository.findOneId(username);
    
        if (findId) {
          throw new ValidationError('이미 사용중인 아이디입니다.');
        }

        await this.userRepository.createUser(username, password);
  };
  loginUser = async (username, password) => {
    const user = await this.UserRepository.findOneId(username);

    if (!user) {
      throw new ValidationError('아이디 또는 패스워드가 잘못되었습니다.');
    }

    const accessToken = jwt.sign(
      { userId: user.userId },
      SECRET_KEY,
      { expiresIn: '1d' }
    );
    const refreshToken = jwt.sign(
      { userId: user.userId },
      SECRET_KEY,
      { expiresIn: '21d' }
    );
    console.log(accessToken, 'access토큰 확인');
    console.log(refreshToken, 'refresh토큰 확인');

    await this.UserRepository.updateRefresh(refreshToken, user);

    return [user, accessToken];
  };
  checkUser = async (userId) => {
    const existUser = await this.UserRepository.findOneUser(userId);

    return existUser;
  };
}

module.exports = UsersService;
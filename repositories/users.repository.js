const { User } = require('../models');

class UserRepository {


    findUser = async (userId) =>{
      const user = await User.findByPk(userId);
      
      return user;
    }
  
    createUser = async (username, password) => {
      // ORM인 Sequelize에서 Posts 모델의 create 메소드를 사용해 데이터를 요청합니다.
      console.log(username,password)
      const createUser = await Posts.create({ username, password });
  
      return createUser;
    }
    
  
  }
  
  module.exports = UserRepository;
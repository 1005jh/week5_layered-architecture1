// repositories/posts.repository.js

const { Posts } = require('../models');

class PostRepository {
  findAllPost = async () => {
    // ORM인 Sequelize에서 Posts 모델의 findAll 메소드를 사용해 데이터를 요청합니다.
    const posts = await Posts.findAll();

    return posts;
  }

  findOnePost = async (postId) =>{
    const postOne = await Posts.findByPk(postId);

    return postOne;
  }

  createPost = async (nickname, title, content) => {
    // ORM인 Sequelize에서 Posts 모델의 create 메소드를 사용해 데이터를 요청합니다.
    console.log(nickname,password,title,content)
    const createPostData = await Posts.create({ nickname, title, content });

    return createPostData;
  }
  
  updatePost = async (postId, title, content) => {
    const updatePostData = await Posts.update(
      { title, content },
      { where: { postId, password } }
    );
    return updatePostData;
  };


  deletePost = async (postId) => {
    const updatePostData = await Posts.destroy({ where: { postId } });

    return updatePostData;
  };
}




module.exports = PostRepository;

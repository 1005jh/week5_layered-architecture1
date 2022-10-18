// repositories/posts.repository.js

const { Posts } = require('../models');

class PostRepository {

  //게시글 전체조회
  findAllPost = async () => {
    const posts = await Posts.findAll();

    return posts;
  }

  //게시글 하나조회
  findOnePost = async (postId) =>{
    const postOne = await Posts.findByPk(postId);
    return postOne;
  }

  //게시글 생성
  createPost = async (nickname, userId, title, content) => {
    console.log(nickname,password,title,content)
    const createPostData = await Posts.create({ nickname, userId, title, content});
    return createPostData;
  }
  
  //게시글 업데이트
  updatePost = async (postId, title, content) => {
    const updatePostData = await Posts.update(
      { title, content },
      { where: { postId, password } }
    );
    return updatePostData;
  };

  //게시글 삭제
  deletePost = async (postId) => {
    const deletePostData = await Posts.destroy({ where: { postId } });

    return deletePostData;
  };
}




module.exports = PostRepository;

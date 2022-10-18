// services/posts.service.js

const PostRepository = require('../repositories/posts.repository');
const { post } = require('../routes');

class PostService {
  postRepository = new PostRepository();

  //게시글 전체 조회
  findAllPost = async () => {

    const allPost = await this.postRepository.findAllPost();

    // 호출한 Post들을 가장 최신 게시글 부터 정렬
    console.log(allPost)
    allPost.sort((a, b) => {
      return b.createdAt - a.createdAt;
    })


    return allPost.map(post => {
      return {
        postId: post.postId,
        userId: post.userId,
        nickname: post.nickname,
        title: post.title,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        likes: post.likes
      }
    });
  }

  // 게시글  상세 조회
  findOnePost = async (postId) => {
    const postOne = await this.postRepository.findOnePost(postId);

    return postOne;
  }

  //게시글 생성
  createPost = async ({title, content, user}) => {
    const nickname = user.username;
    const userId = user.userId;

    const createPostData = await this.postRepository.createPost({ title, content, nickname,  userId });

    return {
      postId: post.postId,
      userId: post.userId,
      nickname: post.nickname,
      title: post.title,
      content: post.content,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
      likes: post.likes
    };
  }

  //게시글 수정
  updatePost = async ({postId, title, content, user}) =>{
    const findPost = await this.PostRepository.findOne(postId)
    if(findPost.userId == user.userId){
        await this.PostRepository.updatePost({postId, title, content});
        return ;
    }
  }

  //게시글 삭제
  deletePost = async ({postId,user}) => {
    const findPost = await this.PostRepository.findOne(postId)
    if(findPost.userId == user.userId){
      await this.PostRepository.deletePost(postId);
      return ;
      }
  }

}

module.exports = PostService;
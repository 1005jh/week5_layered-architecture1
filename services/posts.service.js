// services/posts.service.js

const PostRepository = require('../repositories/posts.repository');
const { post } = require('../routes');

class PostService {
  postRepository = new PostRepository();

  //게시글 전체 조회
  findAllPost = async () => {

    const allPost = await this.postRepository.findAllPost();

    // 호출한 Post들을 가장 최신 게시글 부터 정렬
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
  createPost = async ({title, content, userId, username}) => {
  

    const createPostData = await this.postRepository.createPost({ title, content, username,  userId });

    return createPostData;
  }

  //게시글 수정
  updatePost = async ({postId, title, content, user}) =>{
    const findPost = await this.postRepository.findOnePost(postId)
    console.log(title,11111111111111)
    console.log(content,222222222222222222)
    console.log(postId)
    if(findPost.userId == user.userId){
        await this.postRepository.updatePost({postId, title, content});
        return ;
    }
  }

  //게시글 삭제
  deletePost = async ({postId,user}) => {
    const findPost = await this.postRepository.findOnePost(postId)
    if(findPost.userId == user.userId){
      await this.postRepository.deletePost(postId);
      return ;
      }
  }

}

module.exports = PostService;
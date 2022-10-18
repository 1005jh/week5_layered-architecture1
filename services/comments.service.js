const CommentRepository = require('../repositories/comments.repository');

class CommentService {
    commentRepository = new CommentRepository();

    createComments = async({comment,postId,userId, username}) => {
        console.log(comment, postId, userId, username)
        await this.commentRepository.createComment({comment,postId,userId, username});

    }
    getComments = async (postId) =>{
        const comments = await this.commentRepository.findComments(postId);


        comments.sort((a, b) => {
            return b.createdAt - a.createdAt;
          })

        return comments.map(comment => {
            return {
              commentId: comment.commentId,
              userId: comment.userId,
              nickname: comment.username,
              comment: comment.content,
              createdAt: comment.createdAt,
              updatedAt: comment.updatedAt,
            }
          });
    }

}
module.exports = CommentService;
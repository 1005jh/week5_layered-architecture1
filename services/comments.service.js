const CommentRepository = require('../repositories/comments.repository');

class CommentService {
    commentRepository = new CommentRepository();

    createComments = async(comment,postId,user) => {
        console.log(comment, postId, user)

    }

}
module.exports = CommentService;
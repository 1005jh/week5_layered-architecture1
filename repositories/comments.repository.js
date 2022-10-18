const { Comment } = require('../models');

class CommentRepository {

  //postId기준으로 댓글 가져오기
    findComments = async (postId) => {
      const  comments = await Comment.findAll({where:{postId: postId}})
      return comments;
    }
  
  //댓글 생성
    createComment = async (nickname,comment,userId,postId) => {
      console.log(nickname,password,title,content)
      const createCommentData = await Comment.create({
        content: comment,
        postId: postId,
        userId: userId,
        username: nickname
    });
      return createCommentData;
    }

  //댓글 수정
    updateComment = async (comment,commentId) => {
      console.log(comment,commentId)
      const updateCommentData = await Comment.update({content: comment}, {where:{commentId:commentId}});
      return updateCommentData;
    }

  //댓글 삭제
    deleteComment = async (commentId) => {
      console.log(commentId)
      const deleteCommentData = await Comment.destroy({where:{commentId:commentId}});
      return deleteCommentData;
    }
  }
  
  module.exports = CommentRepository;
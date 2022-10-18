const CommentService = require('../services/comments.service');


class CommentsController {

  commentService = new CommentService(); 

  //댓글 생성
  createComments = async (req, res, next) => {
    
    const {comment} = req.body;
    const {postId} = req.params;
    const {user} = res.locals;
    console.log(user);

    if(!comment){
        return res.status(401).json({"message":"댓글 내용을 입력해 주세요."});
    };

    await this.CommentService.createComments(comment,postId,user);
    
    res.status(200).json({"message":"댓글을 작성하였습니다."})
  }

  //댓글 조회
  getComments = async (req, res, next) => {


  }

  //댓글 수정
  updateComments = async (req, res, next) => {


  }

  //댓글 삭제
  deleteComments = async (req, res, next) => {


  }

}
module.exports = CommentsController;
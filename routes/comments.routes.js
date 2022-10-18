const express = require('express');
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");
const CommentsController = require('../controllers/comments.controller');
const commentsController = new CommentsController();

router.post("/:postid",authMiddleware,commentsController.createComments);      //댓글생성 
router.get("/:postid",commentsController.getComments);                         //댓글조회 
router.put("/:commentid",authMiddleware,commentsController.updateComments);    //댓글수정 
router.delete("/:commentid",authMiddleware,commentsController.deleteComments); //댓글삭제.

module.exports = router;




// const { Comment } = require("../models");
// const { Post } = require("../models");


// //댓글 생성 API
// router.post("/comments/:postid",authMiddleware,async (req, res) => {
//     try{
//   const {comment} = req.body;
//   const {postid} = req.params;
//   const user = res.locals.user;
//   const findpost = await Post.findOne({where:{postId: postid}});
//   if(!comment){
//     return res.status(401).json({"message":"댓글 내용을 입력해 주세요."});
//   }
//   if(findpost==null){
//     return res.status(401).json({"message":"존재하지 않는 게시글 입니다."});
//   };
//   if(findpost.postId){
//    await Comment.create({
//         content: comment,
//         postId: postid,
//         userId: user.userId,
//         username: user.username
//     });
//    res.json({"message":"댓글을 생성하였습니다."});
//   };
//    } catch {return res.status(400).json("400Error")}
//  });

//  //댓글 조회 API
// router.get("/comments/:postid", async (req, res) =>{
//     try{
//     const {postid} = req.params;
//     const getPost = await Post.findOne({where:{postId: postid},})
//     if(getPost !== null){
//         getResult = await Comment.findAll({where:{postId: postid},
//             order: [
//             ["createdAt","DESC"],
//         ]});
//         data = getResult.map((result) =>{return {
//             "commentid":result.commentId,
//             "userId":result.userId,
//             "nickname":result.username,
//             "conmment":result.content,
//             "createdAt":result.createdAt,
//             "updatedAt":result.updatedAt
//     }});
//         res.json({data})
//     } else {return res.status(401).json({"message":"존재하지 않는 게시글 입니다."})};
//      } 
//      catch {return res.status(400).json("400Error")}
// });

// //댓글 수정 API
// router.put("/comments/:commentid",authMiddleware,async(req,res)=>{
//     try{
//     const {commentid} = req.params;
//     const {comment} = req.body;
//     const user = res.locals.user;
//     const getcomment = await Comment.findByPk(commentid);
//     if(user.userId == getcomment.userId){
//         await Comment.update({content: comment}, {where:{commentId:commentid}});
//         res.json({"message":"댓글을 수정하였습니다."});
//     } else {
//         return res.status(401).json({"message":"수정 권한이 없습니다."});
//     };
//     }
//     catch(err){return res.status(400).json("400Error")};
// });

// //댓글 삭제 API
// router.delete("/comments/:commentid",authMiddleware,async(req,res)=>{
//     try{
//     const{commentid} = req.params;
//     const user = res.locals.user;
//     const findComment = await Comment.findByPk(commentid);
//     if(findComment==null){
//         return res.status(401).json({"message":"존재하지 않는 댓글 입니다."});
//     }

//     if(findComment.userId == user.userId){
//         await Comment.destroy({where:{commentId:commentid}});
//         res.json({"message":"댓글을 삭제하였습니다."})
//     }else{
//         return res.status(401).json({"message":"삭제 권한이 없습니다."});
//     }
    
//     }
//     catch {return res.status(400).json("400Error")}
// })
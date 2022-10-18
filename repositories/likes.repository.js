const { Like, Post } = require("../models");

class LikeRepository {
  findOneLike = async (userId, postId) => {
    const findOneLike = await Like.findOne({ where: { userId, postId } });
    return findOneLike;
  };
  upLikePost = async (postId) => {
    const updateLikePost = await Post.update(
      { likes: 1 },
      { where: { postId } }
    );
    return updateLikePost;
  };
  downLikePost = async (postId) => {
    const updateLikePost = await Post.update(
      { likes: -1 },
      { where: { postId } }
    );
    return updateLikePost;
  };
  createLike = async (userId, postId) => {
    const createLike = await Like.create({ userId, postId });

    return createLike;
  };
  destroyLike = async (userId, postId) => {
    const destroyLike = await Like.destroy({ where: { userId, postId } });
    return destroyLike;
  };
}

module.exports = LikesRepository;

const LikesRepository = require("../repositories/likes.repository");
const { ValidationError } = require("../exceptions/index.exception");

class LikesService {
  constructor() {
    this.likesRepository = new LikesRepository();
  }
  findOneLike = async ({ userId, postId }) => {
    console.log("2", postId);
    const like = await this.likesRepository.findOneLike({ userId, postId });
    console.log("3", postId);
    return like;
  };

  createLike = async ({ userId, postId }) => {
    console.log("4", postId);
    const like = await this.likesRepository.findOneLike({ userId, postId });
    console.log("5", postId);

    if (!like) {
      await this.likesRepository.createLike({ userId, postId });
      await this.likesRepository.upLikePost({ postId });
    }
    console.log("6", postId);
  };
  destroyLike = async ({ userId, postId }) => {
    console.log("7", postId);
    const like = await this.likesRepository.findOneLike({ userId, postId });
    console.log("8", postId);
    if (like) {
      await this.likesRepository.downLikePost({ postId });
      await this.likesRepository.destroyLike({ userId, postId });
    }
    console.log("9", postId);
  };
}

module.exports = LikesService;
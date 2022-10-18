"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        targetKey: 'userId',
      });
      this.belongsTo(models.Post, {
        foreignKey: 'postId',
        targetKey: 'postId',
      });
    }
  }
  Comment.init(
    {
      commentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      postId: {
        type: DataTypes.INTEGER,
        required: true,
      },
      username: {
        type: DataTypes.STRING,
        required: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        required: true,
      },
      content: {
        type: DataTypes.STRING,
        required: true,
      },
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};

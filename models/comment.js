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
  Comment.associate = function (models) {
    models.Comments.hasMany(models.User, {
      foreignKey: "userId",
      onDelete: "cascade",
    });
  };
  Comment.associate = function (models) {
    models.Comments.hasMany(models.Post, {
      foreignKey: "postId",
      onDelete: "cascade",
    });
  };
  return Comment;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Like.init(
    {
      likeId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      postId: {
        required: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        required: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Like",
    }
  );
  Like.associate = function (models) {
    models.Likes.hasMany(models.User, {
      foreignKey: "userId",
      onDelete: "cascade",
    });
  };
  Like.associate = function (models) {
    models.Likes.hasMany(models.Post, {
      foreignKey: "postId",
      onDelete: "cascade",
    });
  };
  return Like;
};

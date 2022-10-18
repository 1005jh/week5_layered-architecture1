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
      this.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "userId",
      });
      this.belongsTo(models.Post, {
        foreignKey: "postId",
        targetKey: "postId",
      });
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
  return Like;
};

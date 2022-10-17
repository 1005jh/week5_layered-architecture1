"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.Users,{foreignKey:"userId"});
    }
  }
  Post.init(
    {
      postId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "userId",
        },
      },
      username: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
      },
      likes: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  Post.associate = function (models) {
    models.Posts.hasMany(models.User, {
      foreignKey: "userId",
      onDelete: "cascade",
    });
  };
  return Post;
};

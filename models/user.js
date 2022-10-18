"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.hasMany(models.Posts,{
      //   as: "Posts",
      //   foreignKey:"userId",
      // });
      this.hasMany(models.Comment, {
        foreignKey: 'userId',
        sourceKey: 'userId',
      });
      this.hasMany(models.Post, {
        foreignKey: 'userId',
        sourceKey: 'userId',
      });
      this.hasMany(models.Like, {
        foreignKey: 'likeId',
        sourceKey: 'likeId',
      });
    }
  }
  User.init(
    {
      userId: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      username: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
      refreshToken: {
        type: DataTypes.STRING
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

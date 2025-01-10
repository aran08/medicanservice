"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Specialization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Specialization.hasMany(models.Doctor, {
        foreignKey: "specializationID",
        as: "doctors",
      });
      
      Specialization.hasMany(models.Hospital, {
        foreignKey: "specializationID",
        as: "hospitals",
      });
      
    }
  }
  Specialization.init(
    {
      specialization: {
        type: DataTypes.JSON,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Specialization",
      tableName: "specializations",

    }
  );
  return Specialization;
};

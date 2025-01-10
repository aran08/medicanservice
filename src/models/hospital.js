"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Hospital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define a one-to-many relationship between Hospital and Doctor
      Hospital.hasMany(models.Doctor, {
        foreignKey: "hospitalId",
        as: "doctors",
        onDelete: "CASCADE",
      });
    }
  }

  Hospital.init(
    {
      hospitalName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cityName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      specializationID: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      stateName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      websiteUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Hospital",
    }
  );

  return Hospital;
};

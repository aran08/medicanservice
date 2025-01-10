"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    static associate(models) {
      Doctor.belongsTo(models.Hospital, {
        foreignKey: "hospitalId",
        as: "hospitals",
        onDelete: "CASCADE",
      });
    }

    static async getSpecializations(doctorId) {
      const doctor = await Doctor.findByPk(doctorId);
      if (doctor && doctor.specializationID) {
        const specializationIds = doctor.specializationID;
        const specializations = await sequelize.models.Specialization.findAll({
          where: {
            id: {
              [sequelize.Op.in]: specializationIds,
            },
          },
        });
        return specializations;
      }
      return [];
    }
  }

  Doctor.init(
    {
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      specializationID: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      hospitalId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "hospitals",
          key: "id",
        },
      },
      location: DataTypes.STRING,
      educationHistory: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      language: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      about: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Doctor",
      hooks: {
        beforeUpdate: async (doctor, options) => {
          const existingDoctor = await Doctor.findByPk(doctor.id);

          // Prevent updates to `Name` or `email`
          if (
            doctor.changed("email") ||
            doctor.changed("Name")
          ) {
            throw new Error(
              "You cannot update email or Name once they are set."
            );
          }

          // Handle `educationHistory`: allow appending only
          if (doctor.changed("educationHistory")) {
            const newEducationHistory = doctor.educationHistory || [];
            const existingEducationHistory =
              existingDoctor.educationHistory || [];

            // Ensure existing entries remain unchanged
            const updatedEducationHistory = [
              ...existingEducationHistory,
              ...newEducationHistory.filter(
                (item) =>
                  !existingEducationHistory.some(
                    (existingItem) =>
                      JSON.stringify(existingItem) === JSON.stringify(item)
                  )
              ),
            ];

            doctor.educationHistory = updatedEducationHistory;
          }
        },
      },
    }
  );

  return Doctor;
};

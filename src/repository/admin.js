const { Specialization } = require("../models/index");
const { Hospital } = require("../models/index");

class AdminRepository {
  // For Hospital Management
  async createbulkHosptal(data) {
    try {
      const hospital = await Hospital.bulkCreate(data);
      return hospital;
    } catch (error) {
      console.log("Something wrong at repository layer");
      throw error;
    }
  }

  async createHospital(data) {
    try {
      const hospital = await Hospital.create(data);
      return hospital;
    } catch (error) {
      console.log("Something wrong at repository layer");
      throw error;
    }
  }

  async updateHospital(data, hospitalId) {
    try {
      const response = await Hospital.update(data, {
        where: {
          id: hospitalId,
        },
      });

      if (response[0] > 0) {
        const updatedHospital = await Hospital.findOne({
          where: { id: hospitalId },
        });

        return updatedHospital;
      }
    } catch (error) {
      console.log("Something wrong at repository layer");
      throw error;
    }
  }

  async getAllHospital() {
    try {
      const response = await Hospital.findAll();
      return response;
    } catch (error) {
      console.log("Something wrong at repository layer");
      throw error;
    }
  }

  async getById(hospitalId) {
    try {
      const response = await Hospital.findOne({
        where: {
          id: hospitalId,
        },
      });
      return response;
    } catch (error) {
      console.log("Something wrong at repository layer");
      throw error;
    }
  }

  async getByCity(city) {
    try {
      const response = await Hospital.findAll({
        where: {
          cityName: city.cityName,
        },
      });
      return response;
    } catch (error) {
      console.log("Something wrong at Repository lavel");
      throw error;
    }
  }

  async getBystate(state) {
    try {
      const response = await Hospital.findAll({
        where: {
          stateName: state.stateName,
        },
      });
      return response
    } catch (error) {
      console.log("Something wrong at Repository lavel");
      throw error;
    }
  }

  async getVerified(verified) {
    try {
      const response = await Hospital.findAll({
        where: {
          isVerified: verified,
        },
      });
      if (!response || response.length === 0) {
        console.log('No verified hospitals found.');
      } else {
        return response;
      }
    } catch (error) {
      console.log("Something wrong at Repository lavel");
      throw error;
    }
  }

  async deleteHospital(hospitalId) {
    try {
      const response = await Hospital.destroy({
        where: {
          id: hospitalId,
        },
      });
      return response;
    } catch (error) {
      console.log("Something wrong at repository layer");
      throw error;
    }
  }
  // For specialization managementa
  async createSpecilization(data) {
    try {
      const specialization = await Specialization.bulkCreate(data);
      return specialization;
    } catch (error) {
      console.log("Something wrong at repository layer");
      throw error;
    }
  }

  async addmoreSpecilization(data) {
    try {
      const specialization = await Specialization.create(data);
      return specialization;
    } catch (error) {
      console.log("Something wrong at repository layer");
      throw error;
    }
  }

  async updateSpecilization(id, newData) {
    try {
      const specializationRecord = await Specialization.findOne({
        where: { id: id },
      });

      if (!specializationRecord) {
        throw new Error("Specialization not found");
      }

      // Update the specialization array with the new data
      const updatedSpecialization = {
        ...specializationRecord.specialization,
        ...newData,
      };
      const updatedRecord = await Specialization.update(
        { specialization: updatedSpecialization },
        { where: { id: id }, returning: true }
      );

      return updatedRecord[1][0];
    } catch (error) {
      console.log("Something wrong at repository layer");
      throw error;
    }
  }

  async getAllSpecialization() {
    try {
      const data = await Specialization.findAll();
      return data;
    } catch (error) {
      console.log("Something wrong at repository layer");
      throw error;
    }
  }

  async deleteSpecilization(id) {
    try {
      const specialization = await Specialization.destroy({
        where: { id: id },
      });
      return specialization;
    } catch (error) {
      console.log("Something wrong at repository layer");
      throw error;
    }
  }
}

module.exports = AdminRepository;

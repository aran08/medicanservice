const { Doctor } = require("../models/index");
const { Op } = require('sequelize');

class DoctorRepository {
  async CreatDoctor(data) {
    try {
      const doctor = await Doctor.create(data);
      return doctor;
    } catch (error) {
      console.log("Something Wrong at Repository layer");
      throw (error);
    }
  }

  async getall() {
    try {
      const response = await Doctor.findAll();
      return response;
    } catch (error) {
      console.log("Something Wrong at Repository layer");
      throw (error);
    }
  }

  async getbyHospitalId(hospitalId) {
    try {
      const response = await Doctor.findAll({
        where : {
          hospitalId: hospitalId
        }
      });
      return response;
    } catch (error) {
      console.log("Something Wrong at Repository layer");
      throw (error);
    }
  }

  async GetbyId(doctorid) {
    try {
      const doctor = await Doctor.findByPk(doctorid);

      return doctor;
    } catch (error) {
        console.log("Something wrong at repository layer")
        throw (error);
    }
  }

  async update(data, doctorid) {
    try {
      const response = await Doctor.update(data, {
        where : {
          id: doctorid
        }
      })
      return response;
    } catch (error) {
      console.log("Something wrong at repository layer")
      throw (error);
    }
  }

  async Delete(doctorid) {
    try {
      const response = await Doctor.destroy({
        where : {
          id : doctorid
        }
      })
    } catch (error) {
      console.log("Something wrong at repository layer")
      throw (error);
    }
  }
}

module.exports = DoctorRepository;

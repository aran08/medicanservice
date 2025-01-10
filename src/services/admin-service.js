const AdminRepository = require("../repository/admin");

class AdminService {
  constructor() {
    this.adminrepository = new AdminRepository();
  }

  async createbulkHospital(data) {
    try {
      const hospital = await this.adminrepository.createbulkHosptal(data);
      return hospital;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while creating Hospital"
      );
      throw error;
    }
  }

  async createHospital(data) {
    try {
      const hospital = await this.adminrepository.createHospital(data);
      return hospital;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while creating hospital"
      );
      throw error;
    }
  }

  // Update hospital details
  async updateHospital(data, hospitalId) {
    try {
      const response = await this.adminrepository.updateHospital(
        data,
        hospitalId
      );
      return response;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while updating hospital"
      );
      throw error;
    }
  }

  // Get all hospitals
  async getAllHospital() {
    try {
      const hospitals = await this.adminrepository.getAllHospital();
      return hospitals;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while retrieving hospitals"
      );
      throw error;
    }
  }

  // Get hospital by ID
  async getById(hospitalId) {
    try {
      const hospital = await this.adminrepository.getById(hospitalId);
      return hospital;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while retrieving hospital"
      );
      throw error;
    }
  }

  async getBycity(city) {
    try {
      const response = await this.adminrepository.getByCity(city);
      return response;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while retrieving hospital"
      );
      throw error;
    }
  }

  async getBystate(state) {
    try {
      const response = await this.adminrepository.getBystate(state);
      return response;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while retrieving hospital"
      );
      throw error;
    }
  }

  async getVerified(verified) {
    try {
      const response = await this.adminrepository.getVerified(verified);
      return response;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while retrieving hospital"
      );
      throw error;
    }
  }

  // Delete a hospital
  async deleteHospital(hospitalId) {
    try {
      const response = await this.adminrepository.deleteHospital(hospitalId);
      return response;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while deleting hospital"
      );
      throw error;
    }
  }
  // For Specialization management
  async createSpecialization(data) {
    try {
      const specialization = await this.adminrepository.createSpecilization(
        data
      );
      return specialization;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while creating specialization"
      );
      throw error;
    }
  }

  async addMoreSpecialization(data) {
    try {
      const specialization = await this.adminrepository.addmoreSpecilization(
        data
      );
      return specialization;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while adding more specialization"
      );
      throw error;
    }
  }

  async updateSpecialization(id, newData) {
    try {
      const updatedSpecialization =
        await this.adminrepository.updateSpecilization(id, newData);
      return updatedSpecialization;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while updating specialization"
      );
      throw error;
    }
  }

  async getAllSpecialization() {
    try {
      const result = await this.adminrepository.getAllSpecialization();
      return result;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while Fetching specialization"
      );
      throw error;
    }
  }

  async deleteSpecialization(id) {
    try {
      const deletedSpecialization =
        await this.adminrepository.deleteSpecilization(id);
      return deletedSpecialization;
    } catch (error) {
      console.log(
        "Something went wrong at the service layer while deleting specialization"
      );
      throw error;
    }
  }
}

module.exports = AdminService;

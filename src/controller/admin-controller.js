const AdminService = require("../services/admin-service");

const adminService = new AdminService();

// For Hospital Management

const createHospital = async (req, res) => {
    try {
        const hospital = await adminService.createHospital(req.body);
        return res.status(201).json({
            success: true,
            message: "Successfully created hospital",
            data: hospital,
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create hospital",
            err: error.errors[0].message,
        });
    }
};

// Bulk create hospitals
const createBulkHospital = async (req, res) => {
    try {
        const hospital = await adminService.createbulkHospital(req.body);
        return res.status(201).json({
            success: true,
            message: "Successfully created hospitals",
            data: hospital,
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create hospitals",
            err: error.errors[0].message,
        });
    }
};

// Update a hospital
const updateHospital = async (req, res) => {
    try {
        const updatedHospital = await adminService.updateHospital(req.body, req.params.id);
        return res.status(200).json({
            success: true,
            message: "Successfully updated hospital",
            data: updatedHospital,
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update hospital",
            err: error.errors[0].message,
        });
    }
};

// Get all hospitals
const getAllHospital = async (req, res) => {
    try {
        const result = await adminService.getAllHospital();
        return res.status(200).json({
            success: true,
            message: "Successfully fetched hospitals",
            data: result,
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch hospitals",
            err: error.errors[0].message,
        });
    }
};

// Get hospital by ID
const getById = async (req, res) => {
    try {
        const hospital = await adminService.getById(id.params.id);
        if (!hospital || hospital.length === 0) {
            return res.status(404).json({
              success: false,
              message: "No hospitals found that are verified",
              data: {},
              err: {},
            });
          }

        return res.status(200).json({
            success: true,
            message: "Successfully fetched hospital",
            data: hospital,
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch hospital",
            err: error.errors[0].message,
        });
    }
};

const getBycity = async (req, res) => {
    try {
        const hospital = await adminService.getBycity(req.body);
        if (hospital.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No hospitals found for the given city",
                data: {},
                err: {},
            });
        }

        return res.status(200).json({
            success: true,
            message: "Successfully fetched hospital",
            data: hospital,
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch hospital",
            err: error.errors[0].message,
        });
    }
}

const getByState = async (req, res) => {
    try {
        const hospital = await adminService.getBystate(req.body);
        if (hospital.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No hospitals found for the given state",
                data: {},
                err: {},
            });
        }

        return res.status(200).json({
            success: true,
            message: "Successfully fetched hospital",
            data: hospital,
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch hospital",
            err: error.errors[0].message,
        });
    }
}

const Verified = async (req, res) => {
    try {
        const hospital = await adminService.getVerified(req.params);
        if (!hospital || hospital.length === 0) {
            return res.status(404).json({
              success: false,
              message: "No hospitals found that are verified",
              data: {},
              err: {},
            });
          }

        return res.status(200).json({
            success: true,
            message: "Successfully fetched hospital",
            data: hospital,
            err: {},
        });
    } catch (error) {
        console.error("Error in Verified Controller:", error.message, error.stack);
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch hospital",
            err: error.errors[0].message,
        });
    }
}

// Delete a hospital
const deleteHospital = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedHospital = await adminService.deleteHospital(id);
        return res.status(200).json({
            success: true,
            message: "Successfully deleted hospital",
            data: deletedHospital,
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete hospital",
            err: error.errors[0].message,
        });
    }
};

// For specialization management

const createSpecialization = async (req, res) => {
  try {
    const specialization = await adminService.createSpecialization(req.body);
    return res.status(201).json({
      success: true,
      message: "Successfully created specialization(s)",
      data: specialization,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create specialization(s)",
      err: error.errors[0].message,
    });
  }
};

const addMoreSpecialization = async (req, res) => {
  try {
    const specialization = await adminService.addMoreSpecialization(req.body);
    return res.status(201).json({
      success: true,
      message: "Successfully added specialization",
      data: specialization,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to add specialization",
      err: error.errors[0].message,
    });
  }
};

const updateSpecialization = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSpecialization = await adminService.updateSpecialization(
      id,
      req.body
    );
    return res.status(200).json({
      success: true,
      message: "Successfully updated specialization",
      data: updatedSpecialization,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update specialization",
      err: error.errors[0].message,
    });
  }
};

const getAllSpecialization = async (req, res) => {
  try {
    const result = await adminService.getAllSpecialization();
    return res.status(200).json({
      success: true,
      message: "Successfully Fetched specialization",
      data: result,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to Fetch specialization",
      err: error.errors[0].message,
    });
  }
};

const deleteSpecialization = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSpecialization = await adminService.deleteSpecialization(id);
    return res.status(200).json({
      success: true,
      message: "Successfully deleted specialization",
      data: deletedSpecialization,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete specialization",
      err: error.errors[0].message,
    });
  }
};

module.exports = {
  // For hospital
  createHospital,
  createBulkHospital,
  updateHospital,
  getAllHospital,
  getById,
  getBycity,
  getByState,
  Verified,
  deleteHospital,
  // Specialization
  createSpecialization,
  addMoreSpecialization,
  updateSpecialization,
  getAllSpecialization,
  deleteSpecialization,
};

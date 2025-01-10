const DoctorService = require("../services/doctor-service");

const doctorservice = new DoctorService();

const create = async (req, res) => {
  try {
    const doctor = await doctorservice.Creatdoctor(req.body);
    return res.status(201).json({
      success: true,
      message: "Successfully created a Doctor",
      data: doctor,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a Doctor",
      err: error.errors[0].message,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const doctor = await doctorservice.getAll();
    return res.status(200).json({
      success: true,
      message: "Successfully Fetch the Doctor Data",
      data: doctor,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to Fetch the doctor",
      err: error.errors[0].message,
    });
  }
};

const getbyHospitalId = async (req, res) => {
  try {
    const doctor = await doctorservice.getbyHospitalId(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Successfully Fetch the Doctor Data",
      data: doctor,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to Fetch the doctor",
      err: error.errors[0].message,
    });
  }
};

const getbyid = async (req, res) => {
  try {
    const doctor = await doctorservice.GetById(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Successfully Fetch the Doctor Data",
      data: doctor,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to Fetch the doctor",
      err: error.errors[0].message,
    });
  }
};

const update = async (req, res) => {
  try {
    const doctor = await doctorservice.update(req.body, req.params.id);
    return res.status(200).json({
      success: true,
      message: "Successfully Updated Data",
      data: doctor,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to Fetched the doctor",
      err: error.errors[0].message,
    });
  }
};

const Delete = async (req, res) => {
  try {
    const { doctorid } = req.params;
    const doctor = await doctorservice.Delete(doctorid);
    return res.status(200).json({
      success: true,
      message: "Successfully Deleted Doctor",
      data: doctor,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the Doctor",
      err: error.errors[0].message,
    });
  }
};

module.exports = {
  create,
  getAll,
  getbyHospitalId,
  getbyid,
  update,
  Delete,
};

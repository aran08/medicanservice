const express = require('express');
const router = express.Router();

const UserController = require("../../controller/user-controller");
const DoctorController = require("../../controller/doctor-controller")
const AdminController = require("../../controller/admin-controller")

// Routes for Hospital Management
router.post('/hospital', AdminController.createHospital);
router.post('/hospital/bulk', AdminController.createBulkHospital);
router.put('/hospital/:id', AdminController.updateHospital);
router.get('/hospital', AdminController.getAllHospital);
router.get('/hospital/verified', AdminController.Verified);
router.get('/hospital/:id', AdminController.getById);
router.post('/hospital/city', AdminController.getBycity);
router.post('/hospital/state', AdminController.getByState);
router.delete('/hospital/:id', AdminController.deleteHospital);

// Rotes for managing Specialization
router.post('/specialization', AdminController.createSpecialization);
router.post('/specialization/add', AdminController.addMoreSpecialization);
router.put('/specialization/:id', AdminController.updateSpecialization);
router.get('/specialization', AdminController.getAllSpecialization)
router.delete('/specialization/:id', AdminController.deleteSpecialization);

router.post('/register', UserController.create)
router.post('/login', UserController.login)

// Rotes for managing Doctors
router.post('/doctor/create', DoctorController.create)
router.get('/doctor/hospital/:id',DoctorController.getbyHospitalId)
router.get('/doctor/getall', DoctorController.getAll)
router.get('/doctor/:id', DoctorController.getbyid)
// router.put('/doctor/update/:id',DoctorController.update)
router.delete('/doctor/delete', DoctorController.Delete)

module.exports = router;
const { Router } = require("express");
const {
  getAllStudents,
  getSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  getAllClassSchool,
} = require("../controllers/students");
const authentification = require("../middleware/authentification");
const multer = require("multer");
const upload = multer({dest:'uploads/' })

const router = Router();
router.get("/classe/:id", getAllStudents);
router.get("/:id", getSingleStudent);
router.post("/:id", upload.single('imgStudent'), createStudent);
router.put("/:id", updateStudent);
router.delete("/:id" , deleteStudent);

module.exports = router;

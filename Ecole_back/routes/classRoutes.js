const { Router } = require("express");
const {
  createClass,
  getAllClass,
  deleteClass,
  getSingleClasse,
} = require("../controllers/classSchool");
const authentification = require("../middleware/authentification");

const router = Router();

router.post("/", createClass);
router.get("/", getAllClass);
// getSignle class est egale a getAllStudents.
router.delete("/:id", deleteClass);
router.get("/:id", getSingleClasse);
module.exports = router;

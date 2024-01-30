const { Router } = require("express");
const {
  register,
  login,
  whoIsConnected,
} = require("../controllers/authControllers");
const authentification = require("../middleware/authentification");
const { getSingleStudent } = require("../controllers/students");

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", authentification, whoIsConnected);
module.exports = router;

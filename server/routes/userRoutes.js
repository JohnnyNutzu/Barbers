const express = require("express");

const {
  registerView,
  loginView,
  registerUser,
  loginUser,
  logoutView
} = require("../Controllers/authController");
const { dashboardView } = require("../Controllers/profileController");
const { protectRoute } = require("../auth/protect");

const router = express.Router();


router.get("/register", registerView);
router.get("/login", loginView);
//Dashboard
router.get("/users/dashboard", protectRoute, dashboardView);

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get('/logout', logoutView);

module.exports = router;
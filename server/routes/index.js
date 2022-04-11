const path = require("path");
const router = require("express").Router();
//const apiRoutes = require("./api");

// API Routes
<<<<<<< HEAD
//router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
=======
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) => {
>>>>>>> 12b80d0f0a9ea36e747bdd7b47279208a54c72df
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
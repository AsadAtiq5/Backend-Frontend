const express = require("express");
const bodyParser = require("body-parser");
const employeeRoutes = require("./routes/employeeRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

// Use employeeRoutes for employee-related routes
app.use("/api/employees", employeeRoutes);

// Use productRoutes for product-related routes
app.use("/api/products", productRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ftwdb@123",
    database: "microbook"
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to database:", err);
        return;
    }
    console.log("Connected to the database");
});

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to handle CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

// Handle OPTIONS requests
app.options("*", (req, res) => {
    res.sendStatus(200);
});

// Route to handle GET request for /calculate
app.get("/calculate", (req, res) => {
    // Handle GET request logic here
    res.send("GET request received for /calculate");
});

// Route to handle POST request for inserting data
app.post("/calculate", (req, res) => {
    const { empname, dom, result1 } = req.body;
    if (!empname || !dom || !result1) {
        return res.status(400).json({ success: false, message: "Missing required parameters" });
    }
    const query = "INSERT INTO microbook (Name, Source_Of_CO2_Emission, Carbon_Emission) VALUES (?, ?, ?)";
    const values = [empname, dom, result1];
    db.query(query, values, (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ success: false, message: "Error inserting data" });
        }
        console.log("Data inserted successfully!");
        res.json({ success: true, message: "Data inserted successfully!", id: result.insertId });
    });
});

// Start the server
const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
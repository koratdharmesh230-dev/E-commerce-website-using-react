import express from 'express';
import cors from 'cors';
import db from './models/index.js';
import userRouters from './routes/users.js'

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware

app.use(express.json());
app.use(cors());

// Routes 
app.use('/auth', userRouters);

// Test Route
app.get('/', (req, res) => {
    res.send("Backend is running with ES Modules");
});

// Start Server
db.sequelize.sync({force:false}).then( () => {
    console.log("Database Connected!");
    app.listen(PORT, () => {
        console.log("Server running on" + " " + PORT);
    });
}).catch((err) => {
    console.error("Failed to sync database:", err);
});
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const personRoutes = require('./routes/personRoutes');

const app = express();
connectDB();  // Connect to MongoDB

app.use(bodyParser.json());  // Parse JSON request bodies
app.use('/api', personRoutes);  // Setup routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

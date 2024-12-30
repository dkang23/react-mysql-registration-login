const express = require('express');
const env = require('dotenv');
const cors = require('cors');
env.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

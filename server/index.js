const express = require("express");
const cors = require("cors");
const db = require("../server/models/index.js");
const PORT = process.env.PORT || 3000;
const app = express();

const router = require('./routes/routes.js')

app.use(express.json());
app.use(cors());

app.use('/api',router)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

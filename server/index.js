const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist/')));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port localhost:${PORT}`);
});

const express = require('express');

let server = express();

server.get("/", (req, res) => {
  res.json({
    "success": true
  })
})

server.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});

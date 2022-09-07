// const { response } = require("express");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: "*", methods: ["GET", "POST"] }));
// app.use(express.static("public"));
app.use(express.json());

// const options = {
//   root: path.join(__dirname),
// };
// const fileName = "index.html";

// Texts sent by users
const texts = [];

// app.get("/", (req, res) => {
//   res.sendFile(fileName, options, (e) => {
//     if (e) console.log(e);
//   });
// });

app.post("/api", (req, res) => {
  console.log("got a request");
  texts.push(req.body.data);
  console.log(texts);
  res.end();
  // response.
});

app.get("/texts", (req, res) => {
  res.json({ texts });
  res.end();
});

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log(`server started on https://localhost:${PORT}`);
});

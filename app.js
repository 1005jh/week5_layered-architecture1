const express = require("express");
const app = express();
const port = 4000;

const routes = require("./routes");

app.use(express.json());
app.use("/", routes);

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});

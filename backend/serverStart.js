const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./server");

// console.log(process.env);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const blogsRouter = require("./routes/blogs");
const userRouter = require("./routes/user");
const categoryRouter = require("./routes/category");

app.use("/blogs", blogsRouter);
app.use("/user", userRouter);
app.use("/category", categoryRouter);

app.listen(4000, "0.0.0.0", () => {
  console.log(`server started on port 4000`);
});

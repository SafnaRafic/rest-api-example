const server = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 3000;

const Movies = require("./controllers/Movies");
const Directors = require("./controllers/Directors");
const mongoose = require("mongoose");

mongoose.connect("mongodb://root:password@localhost/movies?authSource=admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.use(bodyParser.json());
server.use(cors());

server.get("/", (req, res) => {
    res.send("Hello!");
});

server.get("/movies/list", Movies.list);
server.get("/directors/list", Directors.list);

// server.get("/movies/add", Movies.add);

server.listen(PORT, () => console.log(`Server started on port: ${PORT} 🚀`));
const jsonServer = require("json-server");
const cors = require("cors"); // Import the cors middleware

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

// Configure CORS to allow all origins
server.use(cors());

// Use default middlewares (logging, static files, etc.)
server.use(middlewares);

// Use the JSON Server router
server.use(router);

// Start the server
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

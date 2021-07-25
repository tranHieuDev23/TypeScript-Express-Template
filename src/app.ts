import express from "express";
import compression from "compression";  // compresses requests

// Create Express server
const app = express();


// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(express.json());

export default app;

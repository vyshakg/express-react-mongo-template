import express from "express";
import Example from "../model/exampleModel";

const exampleRoute = express.Router();

exampleRoute.get("/api", async (req, res) => {
  // ... Implement here
});

export default exampleRoute;

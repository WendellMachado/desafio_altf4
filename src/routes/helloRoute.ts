import express from "express";

const routes = express.Router();

routes.get("/", (req, res) => {
    res.status(200).json({
      message: `server running on localhost:${process.env.SERVER_PORT}`,
    });
});

  
export default routes;
import express, { Application } from "express";

import cors from "cors";
import { IApiPath } from "../interfaces/models/server";

class Server {
  private app: Application;
  private port: string;
  private apiPath: IApiPath = {
    posts: "/api/posts",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "1990";
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {}

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.get(this.apiPath.posts, (req, res) => {
      res.send("Hello World");
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port} :)`);
    });
  }
}

export default Server;

import express, { Application } from "express";
import cors from "cors";
import { IApiPath } from "../interfaces/models/server";
import { dbConnection } from "../db/config";
import fileUpload from "express-fileupload";
import auth from "../routes/auth";
import uploads from "../routes/uploads";
import posts from "../routes/posts";
class Server {
  private app: Application;
  private port: string;
  private apiPath: IApiPath = {
    posts: "/api/posts",
    uploads: "/api/uploads",
    auth: "/api/auth",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "1990";
    this.dbConnect();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
        createParentPath: true,
      })
    );
  }

  async dbConnect() {
    await dbConnection();
  }

  routes() {
    this.app.use(this.apiPath.auth, auth);
    this.app.use(this.apiPath.uploads, uploads);
    this.app.use(this.apiPath.posts, posts);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port} :)`);
    });
  }
}

export default Server;

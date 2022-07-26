import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const jwtSecret: any = process.env.JWT_SECRET;

export const generateJWT = (uid: string) => {
  return new Promise((resolve, reject) => {
    const payload = { uid };
    jwt.sign(
      payload,
      jwtSecret,
      {
        expiresIn: "4h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("can't generate jwt");
        } else {
          resolve(token);
        }
      }
    );
  });
};

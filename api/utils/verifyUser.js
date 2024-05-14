import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  //it is needed to check the user is authorized or not using browser cookie to update the exisiting user
  const token = req.cookies.access_token;
  if (!token) {
    return next(errorHandler(401, "Unauthorized"));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, "Unauthorized"));
    }
    req.user = user; // the user will be added to the req the it will go to next fuction-first function
    //will be verifyToken and for second function it will be updateUser.
    next();
  });
};

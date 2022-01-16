import { ACCESS_TOKEN } from "../index";
import { token as jsonToken } from "auth/auth";
import { User } from "models/user";
import jwt from "jsonwebtoken";

class TokenImpl {
  public static create(user: User): jsonToken {
    let scopes;
    // Check if the user object passed in
    // has admin set to true, and if so, set
    // scopes to admin
    if (user.admin) {
      scopes = "admin";
    }
    // Sign the JWT
    return jwt.sign(
      { id: user._id, username: user.username, scope: scopes },
      ACCESS_TOKEN,
      {
        algorithm: "HS256",
        expiresIn: "1h"
      }
    );
  }
}

export default TokenImpl;

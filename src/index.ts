import * as Hapi from "@hapi/hapi";
import getRoutes from "./routes";
import Mongoose from "mongoose";
import validate from "./auth/validation";
import { options } from "./config";
require("dotenv").config();

const HOST = process.env.host || "localhost";
const PORT = process.env.port || 5000;
const DATABASE = process.env.database || "mongodb://localhost:27017/local"; // todo: dockerize
export const ACCESS_TOKEN = process.env.ACCESS_TOKEN_SECRET || null;

Mongoose.connect(DATABASE);

const server: Hapi.Server = new Hapi.Server({ host: HOST, port: PORT });

async function start(): Promise<void> {
  try {
    await server.register({
      plugin: require("good"),
      options
    });

    await server.register({
      plugin: require("hapi-pino"),
      options: {
        prettyPrint: process.env.NODE_ENV !== "production",
        // Redact Authorization headers, see https://getpino.io/#/docs/redaction
        redact: ["req.headers.authorization"]
      }
    });

    await server.register([require("hapi-auth-jwt2")]);
    server.auth.strategy("jwt", "jwt", {
      key: ACCESS_TOKEN,
      validate // validate function defined above
    });

    server.auth.default("jwt");

    getRoutes(server);

    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server running @ ${server.info.uri}`);
}

start();

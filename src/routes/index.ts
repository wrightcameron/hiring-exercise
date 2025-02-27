import * as Hapi from "@hapi/hapi";
import UserRoutes from "./users";
import AuthRoutes from "./auth";
import PasswordRoutes from "./password";
// import Joi from 'joi';

export default function getRoutes(server: Hapi.Server): void {
  AuthRoutes(server);
  UserRoutes(server);
  PasswordRoutes(server);
}

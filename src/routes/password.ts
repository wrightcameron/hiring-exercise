import * as Hapi from "@hapi/hapi";
import Joi from "joi";
import UserController from "../controllers/UserController";
import { failAction } from "./util";

export default function getRoutes(server: Hapi.Server): void {
  server.route({
    method: "PUT",
    path: "/password/{userId}",
    options: {
      auth: false,
      // auth: "jwt",
      validate: {
        params: {
          userId: Joi.string().required()
        },
        payload: {
          password: Joi.string().required(),
          newPassword: Joi.string().required()
        },
        failAction
      }
    },
    handler: UserController.updatePassword
  });
}

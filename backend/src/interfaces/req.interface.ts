import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";
import UserModel from "../models/user.model";
import { JwtPayloadExtendida } from "./jwt.interface";
import LigaModel from "../models/liga.model";

export interface IRequestExtendida extends Request{
    user?: JwtPayloadExtendida
    liga?: LigaModel
}

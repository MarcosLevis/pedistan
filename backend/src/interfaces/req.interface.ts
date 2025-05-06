import { Request } from "express";
import { JwtPayloadExtendida } from "./jwt.interface";
import LigaModel from "../models/liga.model";

export interface IRequestExtendida extends Request{
    user?: JwtPayloadExtendida
    liga?: LigaModel
}

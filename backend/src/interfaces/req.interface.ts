import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface IRequestExtendida extends Request{
    user?: string | JwtPayload
}

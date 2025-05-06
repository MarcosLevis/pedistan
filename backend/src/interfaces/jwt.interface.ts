import { JwtPayload } from 'jsonwebtoken';

export interface JwtPayloadExtendida extends JwtPayload { // prueba de agregar id
    id: number;
    iat?: number;
    exp?: number;
}
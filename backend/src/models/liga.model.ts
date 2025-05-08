import { Optional } from "sequelize"
import {Model, Column, Table, DataType, CreatedAt, UpdatedAt, BelongsToMany, HasMany} from "sequelize-typescript";
import { ILiga } from "../interfaces/liga.interface";
import UserModel from "./user.model";
import LigaAdministradorModel from "./liga_administrador.model";
import TorneoModel from "./torneo.model";

// vamos a hacer la DEFINICION MAS RESTRICTIVA en typescript

//esto le dice a typescript que la id de la interfaz es opcional
//y cuando no la ponemos al crear un objeto sequelize la pone automaticamente
interface LigaCreationAttributes extends Optional<ILiga,"id">{}

@Table({
    timestamps: true,
    tableName: "ligas",
    modelName: "Liga"
})

export default class LigaModel extends Model<ILiga,LigaCreationAttributes>{    
    
    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        autoIncrement: true
        //esta forma de UUID no me gusto mucho para esta app:
        // type: DataType.UUID,
        // defaultValue: DataType.UUIDV4,
    })
    declare id: number;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare nombre: string
    
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    declare juego: string
    
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    declare descripcion: string
    
    @CreatedAt
    declare created_at:Date
    
    @UpdatedAt
    declare updated_at: Date


    @BelongsToMany(() => UserModel, {
        through: { model: () => LigaAdministradorModel },
    })
    administradores!: UserModel[];
    
    @HasMany(() => LigaAdministradorModel, {
        onDelete: "CASCADE",
    })
    ligaAdministradorEntries!: LigaAdministradorModel[];

    @HasMany(() => TorneoModel) // Una liga tiene muchos torneos
    declare torneos: TorneoModel[];

}



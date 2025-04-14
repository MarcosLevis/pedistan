import { Optional } from "sequelize"
import {Model, Column, Table, DataType, CreatedAt, UpdatedAt, PrimaryKey, AutoIncrement} from "sequelize-typescript";
import { ILiga } from "../interfaces/liga.interface";

// vamos a hacer la DEFINICION MAS RESTRICTIVA en typescript

//esto le dice a typescript que la id de la interfaz es opcional
//y cuando no la ponemos al crear un objeto sequelize la pone automanticamente
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
        //esta forma de UUID no me gusto mucho para esta app
        // type: DataType.UUID,
        // defaultValue: DataType.UUIDV4,
    })
    declare id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare nombre: string

    @CreatedAt
    declare created_at:Date

    @UpdatedAt
    declare updated_at: Date
}



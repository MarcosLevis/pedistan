import { Optional } from "sequelize";
import { Model, Column, Table, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt } from "sequelize-typescript";
import { IPartida } from "../interfaces/partida.interface";
import TorneoModel from "./torneo.model";

interface PartidaCreationAttributes extends Optional<IPartida, "id"> {}

@Table({
    timestamps: true,
    tableName: "partidas",
    modelName: "Partida"
})
export default class PartidaModel extends Model<IPartida, PartidaCreationAttributes> {
    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        autoIncrement: true,
    })
    declare id: number;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    declare sede: string;

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    declare fecha: Date;


    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    declare ganador: number;

    @ForeignKey(() => TorneoModel) // Clave foránea hacia Torneo
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE" // Si se borra el torneo, se borran sus partidas
    })
    declare torneo_id: number;

    @BelongsTo(() => TorneoModel, 'torneo_id') // Relación: Una partida pertenece a un torneo
    declare torneo: TorneoModel;

    @CreatedAt
    declare created_at: Date;

    @UpdatedAt
    declare updated_at: Date;
}
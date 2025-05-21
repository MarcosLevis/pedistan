import { Optional } from "sequelize";
import { Model, Column, Table, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt } from "sequelize-typescript";
import JugadorModel from "./jugador.model";
import PartidaModel from "./partida.model";
import { IPartidaJugador } from "../interfaces/partida_jugador.interface";

interface PartidaJugadorCreationAttributes extends Optional<IPartidaJugador, "id"> {}

@Table({
    timestamps: true,
    tableName: "partida_jugador",
    modelName: "PartidaJugador"
})
export default class PartidaJugadorModel extends Model<IPartidaJugador, PartidaJugadorCreationAttributes> {

    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        autoIncrement: true,
    })
    declare id: number;

    @ForeignKey(() => JugadorModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE" // Si se borra el jugador, se borran sus participaciones
    })
    declare jugador_id: number;

    @BelongsTo(() => JugadorModel) // Cada participación pertenece a un Jugador
    declare jugador: JugadorModel;

    @ForeignKey(() => PartidaModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE" // Si se borra la partida, se borran sus participaciones
    })
    declare partida_id: number;

    @BelongsTo(() => PartidaModel) // Cada participación pertenece a una Partida
    declare partida: PartidaModel;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 0 // Por defecto, 0 puntos
    })
    declare puntos_en_partida: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false // Por defecto, no ganó
    })
    declare gano_partida: boolean;

    @CreatedAt
    declare created_at: Date;

    @UpdatedAt
    declare updated_at: Date;
}
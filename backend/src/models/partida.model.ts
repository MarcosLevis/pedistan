import { Optional } from "sequelize";
import { Model, Column, Table, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt, BelongsToMany, HasMany } from "sequelize-typescript";
import { IPartida } from "../interfaces/partida.interface";
import TorneoModel from "./torneo.model";
import JugadorModel from "./jugador.model";
import PartidaJugadorModel from "./partida_jugador.model";

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
        type: DataType.INTEGER,
        allowNull: true,
    })
    declare ganador_id: number;

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

    // Relación: Una partida tiene muchas participaciones de jugadores (muchos-a-muchos con Jugador)
    @BelongsToMany(() => JugadorModel, () => PartidaJugadorModel)
    declare jugadores: Array<JugadorModel & { PartidaJugadorModel: PartidaJugadorModel }>;


    // Relación directa a la tabla de unión para acceder a los atributos de la unión
    @HasMany(() => PartidaJugadorModel)
    declare participaciones: PartidaJugadorModel[];

    @CreatedAt
    declare created_at: Date;

    @UpdatedAt
    declare updated_at: Date;
}
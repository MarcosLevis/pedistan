import { Optional } from "sequelize";
import { Model, Column, Table, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt, BelongsToMany, HasMany } from "sequelize-typescript";
import { IJugador } from '../interfaces/jugador.interface';
import PartidaModel from "./partida.model";
import PartidaJugadorModel from "./partida_jugador.model";

interface JugadorCreationAttributes extends Optional<IJugador, "id"> {}

@Table({
    timestamps: true,
    tableName: "jugadores",
    modelName: "Jugador"
})
export default class JugadorModel extends Model<IJugador, JugadorCreationAttributes> {
    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        autoIncrement: true,
    })
    declare id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare nombre: string;

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    declare descripcion: string;

    // Relación: Un jugador puede participar en muchas partidas (muchos-a-muchos con Partida)
    @BelongsToMany(() => PartidaModel, () => PartidaJugadorModel)
    declare partidasJugadas: Array<PartidaModel & { PartidaJugadorModel: PartidaJugadorModel }>;
    // El `& { ParticipacionEnPartidaModel: ParticipacionEnPartidaModel }` es para poder acceder a los atributos de la tabla intermedia cuando cargas esta relación.
    // Relación directa a la tabla de unión para obtener todas las participaciones de un jugador
    @HasMany(() => PartidaJugadorModel)
    declare PartidaJugadorModel: PartidaJugadorModel[];

    @CreatedAt
    declare created_at: Date;

    @UpdatedAt
    declare updated_at: Date;
}
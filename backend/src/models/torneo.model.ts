import { Optional } from "sequelize";
import { Model, Column, Table, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt, HasMany } from "sequelize-typescript";
import { ITorneo } from "../interfaces/torneo.interface";
import LigaModel from "./liga.model";
import PartidaModel from "./partida.model";

interface TorneoCreationAttributes extends Optional<ITorneo, "id"> {}

@Table({
    timestamps: true,
    tableName: "torneos",
    modelName: "Torneo"
})
export default class TorneoModel extends Model<ITorneo, TorneoCreationAttributes> {
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

    // Otros campos específicos del torneo: fecha_inicio, formato, cupos, etc.
    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    declare fecha_inicio: Date;

    @Column({
        type: DataType.DATE,
        allowNull: true,
    })
    declare fecha_fin: Date;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    declare tipo: string;

    @ForeignKey(() => LigaModel) // Clave foránea hacia LigaModel
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE" // Si se borra la liga, se borran sus torneos
    })
    declare liga_id: number;

    @BelongsTo(() => LigaModel, 'liga_id') // Relación: Un torneo pertenece a una Liga
    declare liga: LigaModel;

    @HasMany(() => PartidaModel) // Untorneo tiene muchas partidas
    declare partidas: PartidaModel[];    

    @CreatedAt
    declare created_at: Date;

    @UpdatedAt
    declare updated_at: Date;
}
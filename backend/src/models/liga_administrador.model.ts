import { Model, Column, Table, ForeignKey, DataType, CreatedAt, UpdatedAt, BelongsTo, PrimaryKey } from "sequelize-typescript";
import UserModel from "./user.model"; 
import LigaModel from "./liga.model";

@Table({
    timestamps: true,
    tableName: "liga_administrador", // Nombre de la tabla intermedia
    modelName: "LigaAdministrador"
})
export default class LigaAdministradorModel extends Model {

    @Column({ // ID propio para la entrada de la tabla de unión (opcional, pero común)
        primaryKey: true,
        type: DataType.INTEGER,
        autoIncrement: true,
    })
    declare id: number;

    @BelongsTo(() => UserModel)
    user!: UserModel;

    @ForeignKey(() => UserModel)
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE" // Si se borra el usuario, se borra la admin.
    })
    user_id!: number;



    @BelongsTo(() => LigaModel)
    liga!: LigaModel;

    @ForeignKey(() => LigaModel)
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE" // Si se borra la liga, se borra la admin.
    })
    liga_id!: number;

    @CreatedAt
    declare created_at: Date;

    @UpdatedAt
    declare updated_at: Date;  
    
}

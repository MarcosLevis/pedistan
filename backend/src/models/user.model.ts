import { Optional } from "sequelize"
import { Model, Column, Table, DataType, CreatedAt, UpdatedAt, BelongsToMany, HasMany, } from "sequelize-typescript";
import { IUser } from "../interfaces/user.interface";
import LigaModel from "./liga.model";
import LigaAdministradorModel from "./liga_administrador.model";

interface UserCreationAttributes extends Optional<IUser,"id">{}

@Table({
    timestamps: true,
    tableName: "users",
    modelName: "User"
})

export default class UserModel extends Model<IUser,UserCreationAttributes>{

    
    @Column({
        primaryKey: true,
        type: DataType.INTEGER,
        autoIncrement: true
    })
    declare id: number;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare nombre: string
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare email: string
    
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare password: string
    
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    declare foto: string
    
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    declare descripcion: string
    
    @CreatedAt
    declare created_at:Date
    
    @UpdatedAt
    declare updated_at: Date





    @BelongsToMany(() => LigaModel, {
        through: { model: () => LigaAdministradorModel },
    })
    ligasAdministradas!: LigaModel[];
    
    @HasMany(() => LigaAdministradorModel, {
        onDelete: "CASCADE",
    })
    administracionEntries!: LigaAdministradorModel[];





    
    // @BelongsToMany(() => LigaModel, () => LigaAdministradorModel, {
    //     foreignKey: 'usuario_id',
    //     otherKey: 'liga_id',
    //     as: 'ligasAdministradas' // O el nombre que prefieras para la asociación
    // })
    // declare ligasAdministradas?: LigaModel[];
}



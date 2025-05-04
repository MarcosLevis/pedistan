import { Optional } from "sequelize"
import { Model, Column, Table, DataType, CreatedAt, UpdatedAt, } from "sequelize-typescript";
import { IUser } from "../interfaces/user.interface";

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
}



import { Optional } from 'sequelize';
import {Model, DataType} from 'sequelize-typescript'
import { ILiga } from '../interfaces/liga.interface';

interface LigaCreationAttrs extends Optional<ILiga, 'id'> {}

export class Liga extends Model<ILiga, LigaCreationAttrs> implements ILiga {    
  public id!: number;
  public nombre!: string;

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function initLigaModel(sequelize: Sequelize): typeof Liga {
  Liga.init(
    {
      id: {
        type: DataType.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataType.STRING(100),
        allowNull: false,
      },
    },
    {
      tableName: 'ligas',
      sequelize,
      timestamps: true,
    }
  );
  return Liga;
}

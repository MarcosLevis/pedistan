import { QueryInterface, DataTypes, Sequelize } from 'sequelize';

export async function up(queryInterface: QueryInterface, sequelize: Sequelize): Promise<void> {
  // 1) Crear la tabla 'ligas' (si no existe)
  await queryInterface.createTable('ligas', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  });

  // 2) Insertar una liga de ejemplo
  await queryInterface.bulkInsert('ligas', [
    {
      nombre: 'Liga Inicial',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

export async function down(queryInterface: QueryInterface): Promise<void> {
  // Al revertir, borramos la tabla
  await queryInterface.dropTable('ligas');
}

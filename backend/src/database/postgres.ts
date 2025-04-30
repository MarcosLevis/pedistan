import { Sequelize } from "sequelize-typescript";
import config from "./config"

export const sequelize = new Sequelize({
   ...config.getDataBaseConfig(),
    dialect: "postgres",
    models: [__dirname + "/../models"]
})

export async function connectDB(): Promise<void> {
    try {
      await sequelize.authenticate();
      console.log('✅ Conexión a la base de datos establecida correctamente.');
    } catch (error) {
      console.error('❌ No se pudo conectar a la base de datos:', error);
      process.exit(1);  // detiene la app si falla la conexión
    }
}
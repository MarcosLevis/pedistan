import { sequelize } from "../database/postgres"
import { initLigaModel, Liga } from './liga.model';

// Inicializar todos los modelos aquí:
initLigaModel(sequelize);

// (Si tuvieras más modelos, los inicializarías igual)
// Ejemplo:
// initOtroModelo(sequelize);

export {
  sequelize,
  Liga,
};
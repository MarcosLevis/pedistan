import { Liga } from '../models';

export class LigaService {

  static async getAll(): Promise<Liga[]> {
    return Liga.findAll();
  }

//   static async getById(id: number): Promise<Liga | null> {
//     return Liga.findByPk(id);
//   }

//   static async create(nombre: string): Promise<Liga> {
//     return Liga.create({ nombre });
//   }
}
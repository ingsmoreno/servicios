import Conexion from "../src/db/conexion";
import { UsuarioModel } from "../src/models/usuarios.models"


let conexion: Conexion;

beforeAll( async() => {
conexion = new Conexion();
await conexion.sequelize.sync({force: true});
});

afterAll( async () => {
    await conexion.sequelize.close();
});

afterEach(() => {
  jest.useRealTimers();
});

describe('User Model', () => {
    it('should search all users', async () => {
        console.log('es por esto')
        const user = await UsuarioModel.findAll();
        expect(user).not.toBeNull();
    })
})

import { DetallePedidoModel } from "../detallePedido/models/detallePedido.models";
import { PedidoModel } from "../pedidos/models/pedidos.models";
import { PerfilModel } from "../perfiles/models/perfiles.models";
import { ProductoModel } from "../productos/models/producto.models";
import { UsuarioModel } from "../usuarios/models/usuarios.models";


//Pedidos
UsuarioModel.hasMany(PedidoModel, {
    as: 'pedidos',
    foreignKey: 'id_usuario',
    sourceKey: 'id_usuario',
});

PedidoModel.belongsTo(UsuarioModel, {
    as: 'usuarios',
    foreignKey: 'id_usuario',
});

//Detalle Pedido
PedidoModel.hasMany(DetallePedidoModel, {
    as: 'detallePedidos',
    foreignKey: 'id_pedido',
    sourceKey: 'id_pedido',
});

DetallePedidoModel.belongsTo(PedidoModel, {
    as: 'pedidos',
    foreignKey: 'id_usuario',
});

ProductoModel.hasMany(DetallePedidoModel, {
    as: 'detallePedidos',
    foreignKey: 'id_producto',
    sourceKey: 'id_producto',
});

DetallePedidoModel.belongsTo(ProductoModel, {
    as: 'productos',
    foreignKey: 'id_producto',
});

PerfilModel.hasMany(DetallePedidoModel, {
    as: 'detallePedidos',
    foreignKey: 'id_perfil',
    sourceKey: 'id_perfil',
});

DetallePedidoModel.belongsTo(PerfilModel, {
    as: 'perfiles',
    foreignKey: 'id_perfil',
});

//Perfiles
ProductoModel.hasMany(PerfilModel, {
    as: 'perfil',
    foreignKey: 'id_producto',
    sourceKey: 'id_producto',
});

PerfilModel.belongsTo(ProductoModel, {
    as: 'producto',
    foreignKey: 'id_perfil',
});





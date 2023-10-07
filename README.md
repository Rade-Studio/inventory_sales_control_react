## Nombre del Proyecto
Sistema de Control de Ventas e Inventario para Restaurante

### Descripción
Desarrollar un sistema de software integral que permita a un restaurante gestionar eficientemente sus ventas, inventario y operaciones de mesa. El sistema debe proporcionar la capacidad de generar reportes mensuales y anuales, facturación mensual separada, así como la creación y control de mesas adicionales, incluyendo el proceso de facturación con la opción de incluir o no la propina en la factura.

### Requerimientos Funcionales
1. **Gestión de Ventas:**
   - Registrar órdenes de los clientes.
   - Asignar órdenes a mesas específicas.
   - Permitir la división de facturas entre comensales.
   - Generar facturas y recibos para los clientes.

3. **Gestión de Mesas:**
   - Crear, editar y eliminar mesas en el restaurante.
   - Asignar mesas a servidores o camareros.
   - Registrar el estado de ocupación de cada mesa (libre, ocupada, en espera de limpieza).

4. **Facturación y Propina:**
   - Permitir al cliente elegir si incluir o no la propina en la factura.
   - Calcular automáticamente el monto de la propina si se incluye.
   - Imprimir la factura con todos los detalles de la orden, incluyendo los ítems, los impuestos y la propina (si corresponde).

5. **Reportes:**
   - Generar reportes mensuales y anuales de ventas.
   - Proporcionar un desglose de ventas por tipo de plato o bebida.
   - Mostrar estadísticas de ocupación de mesas.

### INVENTARIOS

Requisitos para la Aplicación de Inventario de Restaurante:

1. **Registro de Inventario**

- La aplicación debe permitir a los usuarios mantener un registro actualizado del inventario de alimentos y bebidas.
- Los usuarios deben poder agregar nuevos productos al inventario, especificando información como nombre del producto, categoría (alimentos o bebidas), cantidad inicial en stock, unidad de medida (por ejemplo, kilogramos, litros, unidades), fecha de vencimiento (si aplica), y precio de compra.
- Debe haber un campo para ingresar una breve descripción del producto.

2. **Notificaciones de Stock Bajo** (POSIBLEMENTE NO HACERLO)

- La aplicación debe monitorear constantemente los niveles de stock de cada producto.
- Cuando la cantidad de un producto en stock alcance un umbral mínimo predefinido (por ejemplo, 10 unidades) y el producto tiene materia prima vinculada, la aplicación debe enviar notificaciones automáticas al personal responsable, alertándoles sobre el bajo stock del producto.
- Las notificaciones deben incluir detalles como el nombre del producto y la cantidad actual en stock.

3. *Recepción de Nuevos Productos*

- La aplicación debe permitir a los usuarios registrar la recepción de nuevos productos en el inventario.
- Los usuarios deben poder ingresar detalles como nombre del proveedor, fecha de recepción, lista de productos recibidos con sus cantidades respectivas y números de lote (si aplica).
- Debe ser posible adjuntar documentos, como facturas o recibos, relacionados con la recepción de productos.
- La aplicación debe actualizar automáticamente los niveles de stock en función de los productos recibidos.

4. *Catálogo de Productos*

- La aplicación debe permitir al restaurante crear platillos en base a los productos de materia prima disponibles en el inventario.
- Para cada platillo, los usuarios pueden seleccionar los productos de materia prima necesarios, especificando la cantidad de cada producto requerida para la preparación.
- Los platillos pueden incluir productos de alimentos y bebidas del inventario.
- Los usuarios pueden optar por no seleccionar materia prima y, en ese caso, no recibirán notificaciones de disponibilidad de materia prima, pero el producto se mostrará en el catálogo.

5. *Categorías de Productos*

- La aplicación debe permitir a los usuarios crear categorías para organizar los productos en el catálogo.
- Cada categoría debe tener un nombre y la opción de subir una imagen representativa.
- Los productos deben poder ser asignados a una categoría.

6. *Vinculación de Productos de Materia Prima*

- La aplicación debe permitir la vinculación de productos de materia prima en el catálogo de productos.
- Esto implica que los productos utilizados para preparar los platillos (materia prima, ingredientes) deben estar conectados al inventario de alimentos.
- Los usuarios pueden optar por no vincular productos de materia prima, y en ese caso, no recibirán notificaciones de disponibilidad de materia prima para ese producto, pero el producto se mostrará en el catálogo.

### Requerimientos No Funcionales
1. **Usabilidad:**
   - La interfaz de usuario debe ser intuitiva y fácil de usar para el personal del restaurante.
   - Debe ser compatible con dispositivos móviles y tabletas.

2. **Seguridad:**
   - Garantizar la seguridad de los datos de clientes y transacciones.
   - Establecer niveles de acceso para el personal (administradores, camareros, cocineros, etc.).

3. **Rendimiento:**
   - El sistema debe ser eficiente y rápido, incluso durante horas pico de actividad.

4. **Escalabilidad:**
   - El sistema debe ser escalable para adaptarse al crecimiento del restaurante.

### Requerimientos Adicionales
1. **Integración con Caja Registradora:**
   - Posibilidad de integración con sistemas de caja registradora para un proceso de pago sin problemas.

2. **Reservas de Mesas:**
   - Opción para que los clientes hagan reservas de mesa en línea.

3. **Historial de Transacciones:**
   - Mantener un historial completo de transacciones para fines de auditoría.

4. **Facturación Electrónica:**
   - Soporte para la generación de facturas electrónicas cumpliendo con la legislación fiscal vigente.

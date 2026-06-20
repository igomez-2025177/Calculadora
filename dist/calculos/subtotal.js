/**
 * Calcula el subtotal sumando todos los precios de los productos.
 * @param precios - Arreglo de precios de cada producto
 * @returns El subtotal (suma de todos los precios)
 */
export function calcularSubtotal(precios) {
    return precios.reduce((acumulado, precio) => acumulado + precio, 0);
}
//# sourceMappingURL=subtotal.js.map
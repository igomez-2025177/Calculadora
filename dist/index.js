import { calcularSubtotal } from "./calculos/subtotal.js";
import { calcularIVA } from "./calculos/iva.js";
import { calcularTotal } from "./calculos/total.js";
import readlineSync from "readline-sync";
const TASA_IVA = 0.12;
/**
 * Muestra el menu principal de la calculadora.
 * Pide los precios al usuario, calcula el subtotal, IVA y total,
 * muestra el resumen y pregunta si desea hacer otra compra.
 * @returns void
 */
function mostrarMenu() {
    const precios = [];
    console.log("==============================");
    console.log("           CALCULADORA        ");
    console.log("==============================");
    const cantidad = readlineSync.questionInt("Cuantos productos deseas ingresar? ");
    for (let i = 1; i <= cantidad; i++) {
        const precio = readlineSync.questionFloat(`Precio del producto ${i}: Q`);
        precios.push(precio);
    }
    const subtotal = calcularSubtotal(precios);
    const iva = calcularIVA(subtotal, TASA_IVA);
    const total = calcularTotal(subtotal, iva);
    console.log("\n==============================");
    console.log("      RESUMEN DE LA COMPRA      ");
    console.log("\n==============================");
    precios.forEach((precio, index) => {
        console.log(`Producto ${index + 1}:    Q${precio.toFixed(2)}`);
    });
    console.log("==============================");
    console.log(`Subtotal:      Q ${subtotal.toFixed(2)}`);
    console.log(`IVA (12%):     Q ${iva.toFixed(2)}`);
    console.log(`Total:         Q ${total.toFixed(2)}`);
    console.log("==============================");
    const repetir = readlineSync.keyInYNStrict("\nDeseas hacer otra compra?");
    if (repetir) {
        mostrarMenu();
    }
    else {
        console.log("\nSaliendo.....");
    }
}
mostrarMenu();
//# sourceMappingURL=index.js.map
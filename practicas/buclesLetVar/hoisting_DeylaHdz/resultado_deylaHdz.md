# Preguntas de bucles

1. **¿Cuál será el resultado del primer `console.log` fuera del primer bucle (variable `j`)?**

    _Respuesta:_ Después de que el bucle termina, el valor de `j` es 3. Esto se debe a que **`var` tiene un alcance global, así que `j` sigue existiendo fuera del bucle.** El valor de `j` fuera del bucle será:

   ```javascript
   Valor de var j fuera del bucle: 3

   ```

2. **¿Qué va a ocurrir en el segundo `console.log` fuera del segundo bucle (variable `k`)?**

    _Respuesta:_ Después de que el bucle termina sale un error porque **`let` tiene un alcance de bloque. Esto significa que `k` no existe fuera del bucle,** y al intentar acceder a `k` fuera de él, se obtiene un error de referencia:

    ```javascript
    ReferenceError: k is not defined

---

*Archivo elaborado por: Deyla Hdz
Fecha: 14 de octubre de 2024*

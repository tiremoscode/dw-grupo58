
1. ¿Cuál será el resultado del primer console.log fuera del primer bucle (variable j).

var j fuera del bucle es igual a 3 en primera porque 3<3 ya no cumple la condición del for es por eso que el resultado sale del bucle y en segunda  **var** posee alcance global entonces desde donde la llamemos se podrá imprimir o en otras palabras tiene alcance aún fuera del bucle

2. ¿Qué va a ocurrir en el segundo console.log fuera del segundo bucle (variable k).

nos aparece el **ReferenceError: k is not defined**, ya que usamos **let** esta variable solo funciona dentro del bucle/alcance de bloque, por lo que al querer reconcer a k fuera del bloque aprece como una variable que aún no se ha definido 

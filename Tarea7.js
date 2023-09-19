//Tarea7
//Serie Gregory Leibniz
function gregoryLeibniz(iterations) {
  let pi = 0;
  let sign = 1;
  
  for (let i = 0; i < iterations; i++) {
    pi += sign / (2 * i + 1);
    sign = -sign; // Cambia el signo en cada iteración
  }
  
  return pi * 4; // Multiplicamos por 4 para obtener una aproximación de π
}

const iterations = 1000000; // Puedes ajustar el número de iteraciones según la precisión que desees
const approximatePi = gregoryLeibniz(iterations);
console.log(`Aproximación de π después de ${iterations} iteraciones: ${approximatePi}`);

//Serie Factorial 
function factorial(n) {
  if (n === 0) {
    return 1; // El factorial de 0 es 1
  } else {
    return n * factorial(n - 1);
  }
}

const numero = 5; // Cambia este número según tus necesidades
const resultado = factorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

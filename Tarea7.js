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

const iterations = 1000000;                 
const approximatePi = gregoryLeibniz(iterations);
console.log(`Aproximación de π después de ${iterations} iteraciones: ${approximatePi}`);

//Serie Factorial con Recursividad 
const factorial = n=>{
  if (n <= 1)return 1
  return n * factorial(n-1);
}
console.log(`El factorial de 3 es:${factorial(3)}`);

//Serie Fibonacci con Recursividad
const fibonacci = n =>{
  if (n<2)return n
  return fibonacci(n-2)+fibonacci(n-1);
}
console.log(`El fibonacci de 4 es:${fibonacci(4)}`);

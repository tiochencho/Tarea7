function contarVocales(frase) {
    
    let vocales = 'aeiouAEIOUáéíóúÁÉÍÓÚ';
    let contadorVocales = 0;

    for(let i = 0; i < frase.length; ++i) {
        if (vocales.indexOf(frase[i]) !== -1) {
            ++contadorVocales;
        }
    }

    return contadorVocales;
}

try {
    console.log(contarVocales('JavaScript es genial')); // 7
} catch (e) {
    console.log(Error: ${e.message});
}

console.log();

try {
    console.log(contarVocales('Los hermanos Karámazov')); // 8
} catch (e) {
    console.log(Error: ${e.message});
}

console.log();
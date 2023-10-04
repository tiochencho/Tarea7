function conteoVocalTi(texto){
         let conteoVocalTi=0;
         let vocalesTi = [`Á`, `á`, `É`, `é`, `Í`, 
         `í`, `Ó`,`ó`, `Ú`, `ú`];

         for(let i = 0; i < texto.length; ++i){
                  if (vocalesTi.indexOf(texto[i])>=0){
                           ++conteoVocalTi;
                  }
         }
         return conteoVocalTi;
}
console.log(conteoVocalTi(`Yó solo sé que no sé`)); 
console.log(conteoVocalTi(`La imaginación es más importante que el conocimiento`));
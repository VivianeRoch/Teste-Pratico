function clone (original){
    let copia = (original instanceof Array) ? [] : {}; // verificando se é um array ou um objeto 'comum' e instanciando a cópia
    for (i in original) { // iterando cada propriedade do objeto original
      if (original[i] && typeof original[i] == 'object') copia[i] = clone(original[i]); // se for um objeto realiza cópia desse objeto (note a recursividade aqui)
      else copia[i] = original[i]; // se não simplesmente copia o valor
    }
    return copia; // retorna a cópia
}
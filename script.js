function sum(x, y, z) {
    return x + y + z;
  }

  const numbers = [1,2,3];

  console.log(sum(... numbers));

  //Função que soma N valores
  function sum(... valores){
    return valores.reduce((acc, next) => acc + next);
  }

  console.log('soma:', sum(2,2,3));

  //Concatenando arrays
  const valores = [4, 1, 5, 7, 2];
  const valores2 = [3, 5, 9, 4];

  const array = [...valores, ...valores2]   //com arrays sempre se utiliza chaves
  console.log('array: ', array);

  //Adiciona elemento no início de array
  const array2 = [99, ...valores, 88]
  console.log('array2: ', array2)

  //Função que recebe um array de valores, multiplica o primeiro por todos os outros
  function x ([primeiro, ...resto]){
    return resto.map(v => v * primeiro)
  }
  console.log(x(valores));

  //Adiciona novo atributo no objeto cliente: updatedAlt
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
  console.log('array: ' , array);
function sum(x, y, z) {
    return x + y + z;
  }

  const numbers = [1,2,3];

  console.log(sum(... numbers));


  function sum(... valores){
    return valores.reduce((acc, next) => acc + next);
  }

  console.log('soma:', sum(2,2,3));
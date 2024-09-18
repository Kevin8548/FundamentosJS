function createCube(size) {
    const arrayA = [];
    const frenteB = '\//';
    const atrasB = '_/';
    const frenteA= '/\\';
    const atrasA = '_\\'
    for(let i=0; i<size; i++){
      let fila = ' '.repeat(i);
      fila += frenteA.repeat(size - i);
      fila += atrasA.repeat(size);
      fila += frenteB.repeat(size - i);
      fila += atrasB.repeat(size);
      arrayA.unshift(fila);
    }
    return arrayA.join('\n');
  }
  
  const cube = createCube(3);
  console.log(cube)
    
function createCube(size) {
    const arrayA = [];
    const frenteA= '/\\';
    const atrasA = '_\\'
    for i=0; i<size; i++;{
      let fila = ' '.repeat(i);
      fila += frenteA.repeat(size - i);
      fila += atrasA.repeat(size);
      arrayA.push(fila);
    }
    return arrayA;
  }
  
  const cube = createCube(1);
  console.log(cube)
    
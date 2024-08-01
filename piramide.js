let altura = 5;  

for (let i = 1; i <= altura; i++) {
  
  let espacio = ' '.repeat(height - i);
 
  let guiones = '-'.repeat(2 * i - 1);
  
  console.log(espacio + guiones + espacio);
}

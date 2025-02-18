Let paises = [];
paises.push('Chile', 'Mexico', 'Haiti', 'Peru')
console.log(paises[3]);
paises.unshift('Keiru');
console.log(paises)
paises[4] = 'Perú'
console.log(paises);
paises.shift(paises); /Eliminar primer elemento/
console.log(paises)
paises.splice(2,1)
console.log(paises)
delete(paises[1])
console.log(paises)
paises[1] = 'Mono'
console.log(paises)
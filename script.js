const mostrarLista = Array => {
console.log ('_____________________________')

if (Array.lenght == 0) return "Lista vacia."

Array.array.forEach(element => {
    console.log(element);
});

return 'La longitud del array es ${array.lenght}'

}

console.log(mostrarLista([1,2,3]));
console.log (mostrarLista([]));
console.log(mostrarLista(['R2 , Maximo , 3']))
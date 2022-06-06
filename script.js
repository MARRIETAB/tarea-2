let contenedor = document.querySelector('.container');
let columna = document.querySelector('.column');

for(let i=1; i<=12; i++){
    let textoCiudad = document.createElement('h4');
    let textoPais = document.createElement('p'); 
    let urlImagen = document.createElement('img');
    let nuevaCiudad = prompt('Por favor ingresa el nombre de la ciudad');
    let nuevoPais = prompt('Por favor ingresa el nombre del país');
    let nuevaImagen = prompt('Por favor ingresa la URL de la ciudad');

    textoCiudad.textContent = `${nuevaCiudad}`;
    textoPais.textContent = `${nuevoPais}`;

    contenedor.appendChild(columna);
    columna.appendChild(urlImagen);
    urlImagen.appendChild(textoCiudad);
    urlImagen.appendChild(textoPais);

    urlImagen.classList.add('img');
    urlImagen.setAttribute('src', nuevaImagen);
    urlImagen.setAttribute('alt',  `${nuevaCiudad} ${nuevoPais} imagen ciudad`);

}
//columna.classList.add('column');








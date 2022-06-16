export class imagenaleatoria{}
function cargarMostrarImagenAleatoria() {
    let imagenes = [
        {
            src: "https://images.unsplash.com/photo-1496070242169-b672c576566b",
            width: "320",
            height: "320"
        },
        {
            src: "https://images.unsplash.com/photo-1518737496070-5bab26f59b3f",
            width: "360",
            height: "360"
        },
        {
            src: "https://images.unsplash.com/photo-1592827001593-78cad6b2e870",
            width: "420",
            height: "420"
        }
    ];

    let bufferImagenes = [];

    for (const e of imagenes) {
        let imagen = new Image();
        imagen.src = e.src;
        imagen.width = e.width;
        imagen.height = e.height;

        bufferImagenes.push(imagen);
    }

    let indiceImagenAleatoria = generarEnteroAleatorio(imagenes.length);
    let imagenAleatoria = bufferImagenes[indiceImagenAleatoria];

    let nuevoElementoImagen = document.body.appendChild(imagenAleatoria);
}

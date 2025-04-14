const libro1 = {
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    year: 1943,
    genre: "Ficción",
    description: "Un cuento poético y filosófico que narra la historia de un joven príncipe que viaja por diferentes planetas.",
}
const libro2 = {
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    year: 1967,
    genre: "Realismo mágico",
    description: "La historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo.",
}
const libro3 = {
 title: "1984", 
 author: "George Orwell",
 year: 1949,
 genre: "Distopía",
 description: "Una novela que presenta un futuro totalitario donde el gobierno controla todos los aspectos de la vida.",
}
const libros = [
    libro1,
    libro2,
    libro3,
];
const text = libros.map((libro) => {
    const { title, author, year, genre, description } = libro;
    return `<div><h2>Título:</h2><span><p>${title}</p></span>
            <h3>Autor:</h3><span><p>${author}</p></span>
            <h3>Año:</h3><span><p>${year}</p></span>
            <h3>Género:</h3><span></p>${genre}</p></span>
            <h3>Descripción:</h3><p>${description}</p></div>`;
}).join('');

module.exports = {text};




import peliculas from "./peliculas.js"; // Importa el módulo de películas

//filtramos películas por categoría

//Los generos serán Acción (28), thriller(53), Aventura(12).
//ACCION
const action = peliculas.filter((pelicula) => pelicula.genre_ids.includes(28));
//thriller
const thriller = peliculas.filter((pelicula) =>
  pelicula.genre_ids.includes(53)
);
const Aventura = peliculas.filter((pelicula) =>
  pelicula.genre_ids.includes(12)
);
//obtenemos elementos del dom
const peliculasAction = document.getElementById("genero-28");
const peliculasThriller = document.getElementById("genero-53");
const peliculasAventura = document.getElementById("genero-12");
//mostar peliculas

const plantillaPeliculas = (array) => {
  const htmlPelis = array.map(
    (peli) =>
      ` <div>
        <img src="https://image.tmdb.org/t/p/w200${peli.poster_path}" alt=${peli.original_title}/>
        <p>${peli.original_title}</p>
        </div>`
  );

  return htmlPelis.join(""); //para eliminar las comas
};
peliculasAction.innerHTML = plantillaPeliculas(action);
peliculasThriller.innerHTML = plantillaPeliculas(thriller);
peliculasAventura.innerHTML = plantillaPeliculas(Aventura);

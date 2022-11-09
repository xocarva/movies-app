# Movies!

Una aplicación web creada con React y TypeScript que consume la API de [The Movie DB](https://www.themoviedb.org/documentation/api).

## Instalación

[Node.js](https://nodejs.org/) debe estar instalado en el equipo. Una vez instalado, debes situarse en la carpeta raíz del proyecto y ejecutar en la terminal:

`npm install`

Para el correcto funcionamiento debe introducirse una API Key de The Movie DB válida en el archivo env.

## Ejecución

Pueden ejecutarse los siguientes scripts:

### `npm start`

Ejecuta la aplicación en modo desarrollo. Salvo configuración adicional, podrá verse en [http://localhost:3000](http://localhost:3000) o el siguiente puerto disponible.

### `npm test`

Lanza los test.

### `npm run build`

Genera la build en una carpeta del mismo nombre.

## Decisiones de diseño

![Diseño](https://github.com/xocarva/movies-app/blob/master/docs/images/folders.png "Diseño")

La aplicación sigue un patrón que se repite desde lo más general hasta sus componentes más pequeños. En la raíz se encuentran aquellos elementos potencialmente útiles para toda la aplicación:

- **pages**: Cada una de ellas corresponde a una ruta y contienen ninguna o la menor cantidad de lógica posible.
- **components**: Los componentes que renderizarán las páginas. El objetivo es definirlos de tal manera que resulten reutilizables en distintos lugares de la aplicación, lo que permitirá situarlos en un nivel más alto dentro de la arquitectura.
- **hooks**: Aquí se ubicarán los hooks personalizados.
- **router**: Ubicación del router de la aplicación, que dirigirá al componente página de la ruta o al router de una de las entidades en views.
- **store**: Gestión de estados globales, en este caso con Redux.
- **utils**: Funciones con potencial de ser reutilizadas en distintos lugares de la aplicación.
- **types**: Debido al pequeño tamaño de la aplicación he unificado la definición de tipos en un archivo, pero una aplicación mayor seguramente requerirá de una mejor organización.
- **views**: Las partes de la aplicación estructuradas por dominios. Cada una de estas vistas contendrá la misma estructura que la de la raíz, pero conteniendo solamente lo relacionado con el dominio.
- **tests**: Los tests seguirán una estructura espejo con respecto a la aplicación.

Cada una de las views que pudiesen existir replicarían esta estructura de manera muy similar, con páginas, componentes y routers. Para este ejercicio he decidido unificar favoritos y películas, siendo la única parte que no figura en la raíz.

## Mejoras a futuro

No me ha dado tiempo a incluir todas las funcionalidades que me hubiese gustado. Estas son algunas propuestas de mejora a futuro:

- **Página de detalle de la película**. Un enlace dirigiría a una url que contenga su id, utilizándolo el componente, gracias a indicarlo en el router, para obtener los datos con un fetch al endpoint disponible a tal efecto.
- **Paginación y filtrado**. La paginación es funcional pero un poco rudimentaria. Con el dato de páginas y resultados totales pueden generarse los botones individuales para tener un paginador que permita saltar a una página concreta. También puede realizarse filtrado, realizando nuevas llamadas con las opciones en la query y/o filtrando y ordenando los resultados ya obtenidos.
- **Fetch usando query params**. La aplicación realiza las peticiones montando la query a partir de lo introducido en la barra de búsqueda. Creo que sería mejor que lo ahí introducido sirviese para navegar a una url con la query (p.e. /search?q=titanic&page=3), y los datos para la petición se obtuviesen en esa nueva página desde la url. Esto permitiría, por ejemplo, que un usuario puediese navegar directamente a una página de resultados o compartiese la url de una búsqueda en una página concreta.
- **Diseño**. Creo que el diseño es funcional, pero no es especialmente atractivo ni novedoso. Podría mejorarlo.
- **Mayor calidad y cobertura de tests**. Son mis primeros pasos en el testing y su diseño y alcance no son buenos. Con más tiempo podría haber seguido aprendiendo y mejorándolos, especialmente una parte sensible de la aplicación como es el componente de resultados, o los slices y thunks del store.


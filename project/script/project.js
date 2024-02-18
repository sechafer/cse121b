document.addEventListener('DOMContentLoaded', async function () {
  const url = 'https://climate-news-feed.p.rapidapi.com/?source=Nasa%20Climate&limit=50&exclude=The%20Guardian';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '09db4c897bmshb4182a425da0a1ap181b81jsnd2a13f91e193',
      'X-RapidAPI-Host': 'climate-news-feed.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    displayArticles(result.articles);
  } catch (error) {
    console.error(error);
  }


  // Función para mostrar los artículos
  function displayArticles(articles) {
      const articlesContainer = document.getElementById('articles');

      let groupCounter = 0; // Contador para controlar el número de artículos en cada grupo
      let groupContainer = null; // Contenedor para agrupar los artículos

      articles.forEach((article, index) => {
          if (groupCounter % 4 === 0) {
              // Crea un nuevo contenedor de grupo después de cada 4 artículos
              groupContainer = document.createElement('div');
              groupContainer.classList.add('article-group');
              articlesContainer.appendChild(groupContainer);
          }

          const articleElement = document.createElement('article');
          articleElement.classList.add('article');

          const titleElement = document.createElement('h2');
          titleElement.textContent = article.title;

          const publishedElement = document.createElement('p');
          publishedElement.textContent = `Published: ${new Date(article.published).toLocaleDateString()}`;

          const sourceElement = document.createElement('p');
          sourceElement.textContent = `Source: ${article.source}`;

          const thumbnailElement = document.createElement('img');
          thumbnailElement.src = article.thumbnail;
          thumbnailElement.alt = article.title;

          const linkElement = document.createElement('a');
          linkElement.textContent = 'Read more';
          linkElement.href = article.url;
          linkElement.target = '_blank';

          articleElement.appendChild(titleElement);
          articleElement.appendChild(publishedElement);
          articleElement.appendChild(sourceElement);
          articleElement.appendChild(thumbnailElement);
          articleElement.appendChild(linkElement);

          groupContainer.appendChild(articleElement);

          // Incrementa el contador de grupo
          groupCounter++;
      });
  }

  // Obtener el elemento select
  const selectElement = document.getElementById('articleLimit');

  // Manejar el cambio en el elemento select
  selectElement.addEventListener('change', function (event) {
      const selectedLimit = event.target.value;
      // Limpiar los artículos existentes
      const articlesContainer = document.getElementById('articles');
      articlesContainer.innerHTML = '';
      // Cargar los artículos con el límite seleccionado
      loadArticles(selectedLimit);
  });

  // Cargar los artículos por defecto con un límite inicial de 5
  loadArticles(5);
});
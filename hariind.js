function search() {
  var search=document.getElementById('1').value;
const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'http://www.omdbapi.com/?apikey=cd2b520d&s='+search, true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.Search.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const title = document.createElement('p');
      title.textContent = movie.Title;

      const year = document.createElement('p');
      year.textContent = movie.Year;
      const img = document.createElement('img');
      img.src = movie.Poster;
      var type = document.createElement('p');
        type.textContent=movie.Type;
        var a=document.createElement("a");
        a.textContent="Imdb";
        a.href="http://imdb.com/title/"+movie.imdbID;
      container.appendChild(card);
      card.appendChild(title);
      card.appendChild(img);
      //card.appendChild(year);
      //card.appendChild(type);
      card.appendChild(a);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
}
//Elementos
const searchBox = document.querySelector('input');
const botao = document.querySelector('button');
const p = document.querySelectorAll('p');
const img = document.querySelector('img');
const h1 = document.querySelector('h1');

botao.addEventListener("click", () => getData(searchBox.value));

//Buscando as informações
async function getData (nomeFilme) {
    const URL = `http://www.omdbapi.com/?t=${nomeFilme}&apikey=433b70b7`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    if (data.Response == "True"){
        renderMovie(data)
        console.log(data);
    }else{
        window.alert(data.Error)
    };
}

//Rendenizando as infos
function renderMovie (filme) {
    p[0].innerText = filme.Year;
    p[1].innerText = filme.Released;
    p[2].innerText = filme.Genre;
    p[3].innerText = filme.Writer;
    p[4].innerText = filme.Actors;
    p[5].innerText = filme.Plot;
    img.src = filme.Poster;
    h1.innerText = filme.Title
}


function getPopularMovies(){
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=fd404be438fd9e7509a552fd09a3ae1a&language=en-US&page=1";

    let popularMovies = document.getElementById("popular");
    let imgURL = "https://image.tmdb.org/t/p/w500/";

    const data = null;

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            let json = JSON.parse(this.responseText);
            console.log(json);

            let html = "";
            for(let i=0; i<4; i++){
                html += `
                    <figure>
                        <img src="${imgURL}${json.results[i].poster_path}" alt="">
                        <figcaption>
                            ${json.results[i].title}
                        </figcaption>
                    </figure>
                `;
            }

            popularMovies.innerHTML = html;
        }
    });

    xhr.open('GET', url);
    xhr.setRequestHeader('accept', 'application/json');

    xhr.send(data);
}

function getBirthYearMovies(e){
    e.preventDefault();
    let year = encodeURI(document.getElementById("userYear"));

    let url = `https://api.themoviedb.org/3/discover/movie?api_key=fd404be438fd9e7509a552fd09a3ae1a&primary_release_year=${encodeURI(year)}&sort_by=revenue.desc&language=en-US&page=1&include_adult=false`;

    let birthMovies = document.getElementById("birthYear");
    let imgURL = "https://image.tmdb.org/t/p/w500/";

    const data = null;

    const xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            let json = JSON.parse(this.responseText);
            console.log(json);

            let html = "";
            for(let i=0; i<4; i++){
                html += `
                    <figure>
                        <img src="${imgURL}${json.results[i].poster_path}" alt="">
                        <figcaption>
                            ${json.results[i].title}
                        </figcaption>
                    </figure>
                `;
            }

            birthMovies.innerHTML = html;
        }
    });

    xhr.open('GET', url);
    xhr.setRequestHeader('accept', 'application/json');

    xhr.send(data);
}

window.addEventListener("load", function(){
	getPopularMovies();
	document.getElementById("yearBtn").addEventListener("click", getBirthYearMovies);
});


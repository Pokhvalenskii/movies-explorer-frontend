class MoviesApi {
  constructor(data) {
    this._urlApiMovie = data.urlMovieApi;
  }

  _checkRes(res) {
    if(res.ok) {
      return res.json();
    } return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(this._urlApiMovie)
      .then(this._checkRes);
  }
}

const moviesApi = new MoviesApi({
  urlMovieApi: 'https://api.nomoreparties.co/beatfilm-movies/'
});

export default moviesApi;

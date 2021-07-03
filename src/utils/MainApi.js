class MainApi {
  constructor(data) {
    this._urlApi = data.urlApi;
  }

  _checkRes(res) {
    if(res.ok) {
      return res.json();
    } return Promise.reject(`Ошибка: ${res.status}`);
  }

  _signup (data) {
    return fetch(`${this._urlApi}/signup`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        'email': data.email,
        'password': data.password,
        'name': data.name
      })
    })
      .then(this._checkRes);
  };

  _signin (data) {
    return fetch(`${this._urlApi}/signin`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        'email': data.email,
        'password': data.password,
      })
    })
      .then(this._checkRes);
  }

  _getMe (data) {
    return fetch (`${this._urlApi}/users/me`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${data.jwt}`
      }
    })
      .then(this._checkRes);
  }

  _editUser (data) {
    return fetch (`${this._urlApi}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${data.jwt}`,
      },
      body: JSON.stringify({
        'email': data.email,
        'name': data.name,
      })
    })
      .then(this._checkRes);
  }

  _getMovies (data) {
    return fetch (`${this._urlApi}/movies`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${data.jwt}`,
      }
    })
      .then(this._checkRes);
  }

  _addMovie (data) {
    return fetch (`${this._urlApi}/movies`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${data.jwt}`,
      },
      body: JSON.stringify({
        'country': data.country,
        'director': data.director,
        'duration': data.duration,
        'year': data.year,
        'description': data.description,
        'image': data.image,
        'trailer': data.trailer,
        'nameRU': data.nameRU,
        'nameEN': data.nameEN,
        'thumbnail': data.thumbnail,
        'movieId': data.movieId,
      })
    })
      .then(this._checkRes);
  }

  _deleteMovie (data) {
    return fetch (`${this._urlApi}/movies/movieId`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${data.jwt}`,
      }
    })
      .then(this._checkRes);
  }


}

const mainApi = new MainApi({
  urlApi: 'https://api.lenskii.nomoredomains.icu/'
})

export default mainApi;
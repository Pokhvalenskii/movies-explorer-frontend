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

}

const mainApi = new MainApi({
  urlApi: 'https://api.lenskii.nomoredomains.icu/'
})

export default mainApi;
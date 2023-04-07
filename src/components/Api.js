export default class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    //загрузка карточек с сервера
    getAllCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers,
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject("Произошла ошибка");
        })
    }

    //добавить новую карточку
    addNewCard(name, link) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name,
                link,
            })
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject("Произошла ошибка");
        })
    }

    //загрузка информации о пользователе с сервера
    getUserName() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers,
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject("Произошла ошибка");
        }) 
    }

    //редактирование профиля
    addNewUserName(name, about) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name,
                about,
              }),
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject("Произошла ошибка");
        }) 
    }

    //поставить лайк
    like(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._headers,
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject("Произошла ошибка");
        }) 
    }

    //удалить лайк
    deleteLike(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject("Произошла ошибка");
        }) 
    }

    //удалить карточку
    deleteCard(id) {
        return fetch(`${this._url}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject("Произошла ошибка");
        })
    }

    //обновить аватар профиля
    addNewUserPhoto(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(data)
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject("Произошла ошибка");
        })
    }
}
export default class UserInfo {
    constructor({name, job, api, userPhoto}) {
        this._name = name;
        this._job = job;
        this._api = api;
        this._userPhoto = userPhoto;
    }

    //загрузка данных о пользователе с сервера
    uploadUserData() {
        this._api.getUserName()
          .then((data) => {
            console.log(data);
            this._name.textContent = data.name;
            this._job.textContent = data.about;
            this._userPhoto.src = data.avatar;
          })
          .catch((err) => {
            console.log(err); // выведем ошибку в консоль
          });
    }

    //принимает новые данные пользователя и отправляет их на сервер
    saveUserInfo(user) {
        this._api
          .addNewUserName(user.name, user.job)
          .then((data) => {
            this._name.textContent = data.name;
            this._job.textContent = data.about;
            return data;
          })
          .catch((err) => console.log(err));
    }

    //возвращает объект с данными пользователя (при открытии попапа)
    getUserInfo() {
        return {
            name: this._name.textContent,
            job: this._job.textContent,
        }
    }
}
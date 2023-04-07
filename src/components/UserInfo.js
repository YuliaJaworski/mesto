export default class UserInfo {
    constructor({name, job, userPhoto}) {
        this._name = name;
        this._job = job;
        this._userPhoto = userPhoto;
    }

    //загрузка данных о пользователе
    uploadUserData(data) {
        this._name.textContent = data.name;
        this._job.textContent = data.about;
        this._userPhoto.src = data.avatar;
    }

    //принимает новые данные пользователя
    saveUserInfo(data) {
        this._name.textContent = data.name;
        this._job.textContent = data.about;
        return data;
    }

    //загрузка нового аватара пользователя
    saveUserAvatar(data) {
        this._userInfo.src = data.link;
        return data;
    }

    getAvatar() {
        return {
            avatar: this._userPhoto.src,
        }
    }

    //возвращает объект с данными пользователя (при открытии попапа)
    getUserInfo() {
        return {
            name: this._name.textContent,
            job: this._job.textContent,
        }
    }
}
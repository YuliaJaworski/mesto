export default class UserInfo {
    constructor({data, userPhoto}) {
        this._name = data.name;
        this._job = data.job;
        this._userPhoto = userPhoto;
        this._id = data.id;
    }

    //загрузка данных о пользователе
    uploadUserData(item) {
        this._id = item.id;
        this._name.textContent = item.name;
        this._job.textContent = item.about;
        this._userPhoto.src = item.avatar;
    }

    getId() {
        return this._id;
    }

    //принимает новые данные пользователя
    saveUserInfo(data) {
        this._name.textContent = data.name;
        this._job.textContent = data.about;
    }

    //загрузка нового аватара пользователя
    saveUserAvatar(data) {
        this._userInfo.src = data.avatar;
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
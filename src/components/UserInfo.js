export default class UserInfo {
    constructor({name, job}) {
        this._name = name;
        this._job = job;
    }

    //возвращает объект с данными пользователя (при открытии попапа)
    getUserInfo() {
        return {
            name: this._name.textContent,
            job: this._job.textContent,
        }
    }

    //принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(data) {
        this._name.textContent = data.name;
        this._job.textContent = data.job;
        return data;
    }
}
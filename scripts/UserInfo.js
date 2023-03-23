export default class UserInfo {
    constructor({name, job}) {
        this._name = name;
        this._job = job;
    }

    //возвращает объект с данными пользователя (при открытии попапа)
    getUserInfo(nameInput, jobInput) {
        nameInput.value = this._name.textContent;
        jobInput.value = this._job.textContent;
    }

    //принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(nameInput, jobInput) {
        this._name.textContent = nameInput.value;
        this._job.textContent = jobInput.value;
    }
}
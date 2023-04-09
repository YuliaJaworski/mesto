export default class Section {
    constructor({renderer}, containerSelector) { //функция отрисовки данных, контейнер, в который нужно добавлять элементы
        this._renderer = renderer;
        this._containerSelector = containerSelector;
    }

    //отрисовка каждого отдельного элемента
    renderItems(cardList, userId) {
        const newCardList = cardList.map((item) => {
            return { name: item.name, 
                link: item.link, 
                id: item._id, 
                owner: item.owner._id, 
                likes: item.likes,
                userId: userId
            }
        });

        //передаем карточки с сервера в функцию renderCard
        newCardList.forEach((item) => {
            this._renderer(item);
      });
    }

    //принимает DOM-элемент и добавляет его в контейнер
    addItem(element) {
        this._containerSelector.prepend(element);
    }

}
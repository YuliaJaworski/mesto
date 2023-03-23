export default class Section {
    constructor({items, renderer}, containerSelector) { //массив данных, функция отрисовки данных, контейнер, в который нужно добавлять элементы
        this._renderedItems = items;
        this._renderer = renderer;
        this._containerSelector = containerSelector;
    }

    //отрисовка каждого отдельного элемента
    renderItems() {
        this._renderedItems.forEach((item) => {
            this._renderer(item);
      });
    }

    //принимает DOM-элемент и добавляет его в контейнер
    addItem(element) {
        this._containerSelector.prepend(element);
    }

}
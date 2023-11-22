/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния

  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Генерация уникального кода записи
   */

  generateUniqueCode = () => {
    const initialCodesArr = this.state.list.map(item => item.code); // Начальный массив кодов

    const allCodesArr = Array.from({ length: 100 }, (_, i) => i + 1); // Массив всех возможных кодов

    const availableCodesArr = allCodesArr.filter(code => !initialCodesArr.includes(code)); // Массив уникальных незанятых значений

    if (availableCodesArr.length === 0) {
      console.error('Исчерпаны все возможные коды')
      return null;
    }
    const uniqueCode = availableCodesArr[Math.floor(Math.random() * availableCodesArr.length)];
  
    return uniqueCode;
  }

  /**
   * Добавление новой записи
   */
  addItem() {
    const uniqueCode = this.generateUniqueCode();

    if (uniqueCode !== null) {
      this.setState({
        ...this.state,
        list: [...this.state.list, { code: uniqueCode, title: 'Новая запись' }]
      })
    }
  };

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.filter(item => item.code !== code)
    })
  };

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map(item => {
        if (item.code === code) {
          item.selected = !item.selected;
          item.counter = item.selected ? (item.counter || 0) + 1 : item.counter;
        } else {
          item.selected = false;
        }
        return item;
      })
    })
  }
}

export default Store;
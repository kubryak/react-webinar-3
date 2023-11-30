import React, { useCallback, useState } from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Popup from './components/popup';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {

  const list = store.getState().list;
  const cartList = store.getState().cart;

  const callbacks = {
    onDeleteItem: useCallback((code) => {
      store.deleteItem(code);
    }, [store]),

    onAddItem: useCallback((item) => {
      store.addItem(item);
    }, [store])
  }

  const [isOpened, setIsOpened] = useState(false);

  const totalAmount = cartList.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.count;
  }, 0)

  return (
    <PageLayout>
      <Head title='Магазин' />
      <Controls onAdd={callbacks.onAddItem}
      setIsOpened={setIsOpened}
      totalAmount={totalAmount}
      cartList={cartList}
      />
      <List list={list}
        onAddItem={callbacks.onAddItem}
      />
      <Popup isOpened={isOpened}
        setIsOpened={setIsOpened}
        onDeleteItem={callbacks.onDeleteItem}
        cartList={cartList}
        totalAmount={totalAmount}
      />
    </PageLayout>
  );
}

export default App;

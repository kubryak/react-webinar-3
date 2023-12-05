import React, { useCallback, useState } from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Cart from './components/cart';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {

  const list = store.getState().list;
  const cartList = store.getState().cart;
  const count = store.getCartOptions().count;
  const amount = store.getCartOptions().amount;

  const callbacks = {
    onDeleteItem: useCallback((code) => {
      store.deleteItem(code);
    }, [store]),

    onAddItem: useCallback((item) => {
      store.addItem(item);
    }, [store])
  }

  const [isOpened, setIsOpened] = useState(false);

  return (
    <PageLayout>
      <Head title='Магазин' />
      <Controls onAdd={callbacks.onAddItem}
        setIsOpened={setIsOpened}
        amount={amount}
        count={count}
      />
      <List list={list}
        onAddItem={callbacks.onAddItem}
      />
      <Cart isOpened={isOpened}
        setIsOpened={setIsOpened}
        onDeleteItem={callbacks.onDeleteItem}
        cartList={cartList}
        count={count}
        amount={amount}
        title={'Корзина'}
      />
    </PageLayout>
  );
}

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import store  from './components/store';
import Counter from './components/counter';


function App() {
  return (
    <Provider store={store}>
      <Counter ></Counter>
    </Provider>
  );
}

export default App;

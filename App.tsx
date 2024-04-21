import React, {useState} from 'react';
import Header from './components/Header';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Data from './components/Data';

const App = () => {
  const [page, setPage] = useState('Dashboard');
  function handleChangePage(v: any) {
    console.log('here');
    setPage(v);
  }

  return (
    <SafeAreaProvider>
      <Header onChangePage={handleChangePage} />
      <Data onChangePage={handleChangePage} pag={page} />
    </SafeAreaProvider>
  );
};

export default App;

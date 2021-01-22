import React from 'react';

import Nav from './components/Nav';
import Side from './components/Side';
import {fetchData} from './redux/actions/action';
import {useDispatch} from 'react-redux';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <>
      <Nav/>
      <Side/>
    </>
  );
}

export default App;

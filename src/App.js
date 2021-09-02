import { Fragment } from 'react';
import Header from './common/header/index'
import { GlobalResetStyle } from './style'
function App() {
  return (
    <Fragment>
      <GlobalResetStyle/>
      <Header/>
    </Fragment>
  );
}

export default App;

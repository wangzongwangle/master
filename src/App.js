import React, { Fragment } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Content from './components/content'
import './App.less';


const App = () => (
  <Fragment>
    <div className='MyHeader'>
      <Header/>
    </div>
    <div className='MyContent'>
      <Content/>
    </div>
    <div className='MyFooter'>
      <Footer/>
    </div>
  </Fragment>
);

export default App;
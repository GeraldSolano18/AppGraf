import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Navbar';

const Layout = withRouter(({ children, location }) => (
  <div className='App'>
    <Header location={location} />
    {children}

  </div>
));

export default Layout;

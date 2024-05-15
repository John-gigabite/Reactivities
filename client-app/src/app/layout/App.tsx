//import React from 'react'; -> Not needed in newer React versions
import { Container } from 'semantic-ui-react';
import NavBar from './navbar';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';



function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? <HomePage /> : (
        <>
          <NavBar />
          <Container style={{ marginTop: '7em' }}>
            <Outlet /> { /*Gets swapped with "Activity Dashboard, etc." */}
          </Container> 
        </>
      )}

    </>
  )
}

export default observer(App);
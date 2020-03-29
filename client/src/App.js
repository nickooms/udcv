import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MDCDrawer } from '@material/drawer';
import { MDCTopAppBar } from '@material/top-app-bar';

import TopAppBar, { Row, Start, NavIcon, Title } from './TopAppBar';
import Drawer from './Drawer';
import List, { Item, Icon, Text, Meta } from './List';
import Home from './Home';
import Languages from './Languages';
import Experience from './Experience';

import './App.css';

const routes = [
  {
    path: '/',
    exact: true,
    title: () => <Title>Curriculum Vitae</Title>,
    main: () => <Home />
  },
  {
    path: '/languages',
    title: () => <Title>Languages</Title>,
    main: () => <Languages />
  },
  {
    path: '/experience',
    title: () => <Title>Experience</Title>,
    main: () => <Experience />
  }
];

const App = () => {
  useEffect(() => {
    const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
    const topAppBar = MDCTopAppBar.attachTo(
      document.querySelector('.mdc-top-app-bar')
    );
    topAppBar.setScrollTarget(document.querySelector('.main-content'));
    topAppBar.listen('MDCTopAppBar:nav', () => {
      drawer.open = !drawer.open;
    });
  }, []);

  return (
    <Router>
      <>
        <Drawer>
          <List>
            <Item href="/" active>
              <Icon>inbox</Icon>
              <Text>Home</Text>
            </Item>
            <Item href="/languages">
              <Icon>send</Icon>
              <Text>Languages</Text>
            </Item>
            <Item href="/experience">
              <Icon>send</Icon>
              <Text>Experience</Text>
              <Meta>expand_more</Meta>
            </Item>
          </List>
        </Drawer>

        <div className="mdc-drawer-app-content">
          <TopAppBar>
            <Row>
              <Start>
                <NavIcon>menu</NavIcon>
                <Switch>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      children={<route.title />}
                    />
                  ))}
                </Switch>
              </Start>
            </Row>
          </TopAppBar>

          <main className="main-content" id="main-content">
            <div className="mdc-top-app-bar--fixed-adjust">
              <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                  />
                ))}
              </Switch>
            </div>
          </main>
        </div>
      </>
    </Router>
  );
};

export default App;

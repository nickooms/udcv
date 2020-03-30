import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MDCDrawer } from '@material/drawer';
import { MDCTopAppBar } from '@material/top-app-bar';

import TopAppBar, { Row, Start, NavIcon, Title } from './TopAppBar';
import Drawer from './Drawer';
import List, { Item, Divider } from './List';
import Home from './Home';
// import ContactInfo from './ContactInfo';
import Languages from './Languages';
import Experience from './Experience';
import workExperience from './data/work-experience';

import './App.css';
import ContactInfo from './ContactInfo';

const menuItems = [
  { href: '/', icon: 'inbox', text: 'Home' },
  { href: '/contact-info', icon: 'send', text: 'Contact Info' },
  { href: '/languages', icon: 'send', text: 'Languages' },
  { href: '/experience', icon: 'send', text: 'Work Experience', items: workExperience }
];

const Menu = ({ path }) => (
  <List>
    {menuItems.map(({ href, icon, text, items }) => {
      const props = { href, icon, text };
      if (href === path) {
        props.active = true;
        if (items) {
          return (
            <Fragment key={href}>
              <Divider />
              <Item {...props} meta="expand_less" />
              {items.map(({ id, name }) => {
                const key = `${href}/${id}`;
                const itemProps = { href: key, icon: '', text: name };
                return <Item key={key} {...itemProps} />;
              })}
              <Divider />
            </Fragment>
          );
        }
        return <Item key={href} {...props} />;
      }
      if (items) {
        return <Item key={href} {...props} meta="expand_more" />;
      }
      return <Item key={href} {...props} />;
    })}
  </List>
);

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <Menu path="/" />,
    title: () => <Title>Curriculum Vitae</Title>,
    main: () => <Home />
  },
  {
    path: '/contact-info',
    sidebar: () => <Menu path="/contact-info" />,
    title: () => <Title>Contact Info</Title>,
    main: () => <ContactInfo />
  },
  {
    path: '/languages',
    sidebar: () => <Menu path="/languages" />,
    title: () => <Title>Languages</Title>,
    main: () => <Languages />
  },
  {
    path: '/experience',
    sidebar: () => <Menu path="/experience" />,
    title: () => <Title>Work Experience</Title>,
    main: () => <Experience />
  }
];

const App = () => {
  useEffect(() => {
    const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
    const topAppBar = MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'));
    topAppBar.setScrollTarget(document.querySelector('.main-content'));
    topAppBar.listen('MDCTopAppBar:nav', () => {
      drawer.open = !drawer.open;
    });
  }, []);

  return (
    <Router>
      <>
        <Drawer>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
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

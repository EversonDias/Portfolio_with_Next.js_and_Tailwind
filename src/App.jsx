/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import Container from './style/app';
import Global from './style/global';
import Header from './partner/header';
import {ThemeProvider} from 'styled-components';
import dark from './style/theme/dark';
import MyRoutes from './routes';
import light from './style/theme/light';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: {
        type: '',
      },
    };

    this.getThemeSystem = this.getThemeSystem.bind(this);
  };

  componentDidMount() {
    this.getThemeSystem();
  }

  getThemeSystem() {
    const theme = window.matchMedia('(prefers-color-scheme: dark)');
    if (theme.matches) {
      this.setState({
        theme: {
          type: 'dark',
        },
      });
    } else {
      this.setState({
        theme: {
          type: 'light',
        },
      });
    }
  }

  render() {
    const {theme} = this.state;
    const setTheme = theme.type === 'dark';
    return (
      <ThemeProvider theme={setTheme ? dark : light}>
        <Container>
          <Global />
          <Header />
          <MyRoutes />
        </Container>
      </ThemeProvider>
    );
  }
}

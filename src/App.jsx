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

    this.getThemeSystemOrStorage = this.getThemeSystemOrStorage.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.setTheme = this.setTheme.bind(this);
  };

  componentDidMount() {
    this.getThemeSystemOrStorage();
  }

  saveThemeLocalStorage(theme) {
    localStorage.setItem('theme', JSON.stringify(theme));
  }

  setTheme(type) {
    this.setState({
      theme: {
        type,
      },
    }, () => {
      const {theme} = this.state;
      this.saveThemeLocalStorage(theme);
    });
  }

  getThemeSystemOrStorage() {
    console.log(localStorage.getItem('theme'));
    if (localStorage.getItem('theme')) {
      const setTheme = localStorage.getItem('theme');
      const theme = JSON.parse(setTheme);
      console.log(theme);
      this.setTheme(theme.type);
    } else {
      const theme = window.matchMedia('(prefers-color-scheme: dark)');
      if (theme.matches) {
        this.setTheme('dark');
      } else {
        this.setTheme('light');
      }
    }
  }

  toggleTheme(e) {
    if (e) {
      this.setTheme('dark');
    } else {
      this.setTheme('light');
    }
  }


  render() {
    const {theme} = this.state;
    const setTheme = theme.type === 'dark';
    return (
      <ThemeProvider theme={setTheme ? dark : light}>
        <Container>
          <Global />
          <Header
            type={theme.type}
            toggleTheme={this.toggleTheme}
          />
          <MyRoutes />
        </Container>
      </ThemeProvider>
    );
  }
}

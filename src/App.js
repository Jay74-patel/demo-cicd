import './App.css';
import React from 'react';
import { Header } from './component/header';
import { Main } from './component/main';
import { Footer } from './component/footer';
import ThemeProvider from './component/themeProvider';
import ThemedComponent from './component/themedComponent';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <ThemeProvider>
      <div>
        <h1>Theme Switcher App</h1>
        <ThemedComponent />
      </div>
    </ThemeProvider>
      <Footer/>
    </div>
  );
}

export default App;

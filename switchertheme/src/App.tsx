import React from 'react';
import {ThemeProvider} from 'styled-components'
import light from './styles/themes/light'

import Header from './components/Header'
import GlobalStyle from './styles/global'

function App() {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyle />
        <Header />
      </div>
    </ThemeProvider>

  );
}

export default App;

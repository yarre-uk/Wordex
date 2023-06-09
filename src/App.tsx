import { HashRouter, Route, Routes } from 'react-router-dom';

import { LayoutContainer } from './modules/Layout';
import { ThemeConfigProvider } from './modules/Theme';
import { Home } from './pages';
import GlobalStyles from './styles/globals';

const App = () => {
  return (
    <HashRouter>
      <ThemeConfigProvider>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<LayoutContainer />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </ThemeConfigProvider>
    </HashRouter>
  );
};

export default App;

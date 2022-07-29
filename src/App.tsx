import { BrowserRouter } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { Provider as ReduxProvider } from 'react-redux';

import config from './config';
import BaseLayout from './layouts/BaseLayout';
import { RouterView } from './core/router';
import { store } from './core/store';

export default function App() {
  return (
    <div data-version={config.app.version}>
      <CssBaseline />

      <ReduxProvider store={store}>
        <BrowserRouter>
          <BaseLayout>
            <RouterView />
          </BaseLayout>
        </BrowserRouter>
      </ReduxProvider>
    </div>
  );
}

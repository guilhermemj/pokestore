import { BrowserRouter } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';

import config from './config';
import BaseLayout from './layouts/BaseLayout';
import { RouterView } from './router';

export default function App() {
  return (
    <div data-version={config.app.version}>
      <CssBaseline />

      <BrowserRouter>
        <BaseLayout>
          <RouterView />
        </BaseLayout>
      </BrowserRouter>
    </div>
  );
}

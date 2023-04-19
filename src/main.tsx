import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import Nav from './app/Nav/Nav';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <div className="body-wrapper">
      <Nav />

      <App />
    </div>
  </StrictMode>
);

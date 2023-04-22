import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import Nav from './app/Nav/Nav';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <div className="body-wrapper">
        <Nav />

        <App />
      </div>
    </BrowserRouter>
  </StrictMode>
);

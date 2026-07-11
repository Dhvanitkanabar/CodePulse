import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './os/App.jsx';
import './os/styles/index.css';
import './sidepanel.css';

const container = document.getElementById('root');
const root = createRoot(container);
// We use MemoryRouter or HashRouter for extensions ideally, but the frontend might be relying on BrowserRouter.
// Let's use HashRouter to prevent extension routing issues.
import { HashRouter } from 'react-router-dom';

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

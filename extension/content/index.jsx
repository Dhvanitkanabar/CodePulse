import React from 'react';
import { createRoot } from 'react-dom/client';
import OverlayManager from './OverlayManager';
import styles from './style.css?inline';

const initShadowDOM = () => {
  // Check if already injected
  if (document.getElementById('neurolens-root')) return;

  const host = document.createElement('div');
  host.id = 'neurolens-root';
  host.style.position = 'fixed';
  host.style.top = '0';
  host.style.left = '0';
  host.style.width = '100%';
  host.style.height = '100%';
  host.style.pointerEvents = 'none';
  host.style.zIndex = '2147483647'; // Max z-index
  document.documentElement.appendChild(host);

  const shadowRoot = host.attachShadow({ mode: 'open' });
  
  // Inject Tailwind styles
  const styleEl = document.createElement('style');
  styleEl.textContent = styles;
  shadowRoot.appendChild(styleEl);

  // Create React mount point
  const mountPoint = document.createElement('div');
  mountPoint.id = 'neurolens-react-root';
  mountPoint.style.pointerEvents = 'none';
  shadowRoot.appendChild(mountPoint);

  const root = createRoot(mountPoint);
  root.render(<OverlayManager />);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initShadowDOM);
} else {
  initShadowDOM();
}

console.log('[NeuroLens] React Shadow DOM Manager Initialized');

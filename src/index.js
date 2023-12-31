import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { NavigationProvider } from './context/navigation';

const element = document.getElementById('root');
const root = createRoot(element);

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
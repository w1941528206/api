import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import './index.css';

const content = document.getElementById('root') as HTMLElement;
const root = createRoot(content);

root.render(<App />);
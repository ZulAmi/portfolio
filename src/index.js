import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';
import './index.css';

// Use this if your app has server-side rendering
const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    render(<App />, rootElement);
}
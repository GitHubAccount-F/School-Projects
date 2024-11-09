import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

// Do not use the document.getElementById syntax anywhere else!
ReactDOM.render(<App></App>, document.getElementById('content'));

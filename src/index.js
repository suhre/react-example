import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ServerConnection from './ServerConnection';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import './jumbotron-narrow.css';

let serverConnection = new ServerConnection();

ReactDOM.render(
    <App serverConnection={serverConnection} />,
    document.getElementById('root')
);

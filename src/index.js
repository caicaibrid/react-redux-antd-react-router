import ReactDOM from 'react-dom';
import Routers  from './router/router';

var attachFastClick = require('fastclick');  
attachFastClick(document.body);  

ReactDOM.render(Routers,document.getElementById('root'));

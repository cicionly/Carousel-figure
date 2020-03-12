import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider';

let items = [
    {src:require('./images/1.jpg')},
    {src:require('./images/2.jpg')},
    {src:require('./images/3.jpg')},
]
ReactDOM.render(
      <Slider 
          items = {items}
          speed = {1.5}
          delay = {2.1} 
          pause = {true} 
          autoplay = {true} 
          dots = {true} 
          arrows = {true} 
          />, document.getElementById('root'));

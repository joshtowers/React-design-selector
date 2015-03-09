/** @jsx React.DOM */
var React = require('react');
var APP   = require('./components/app');

// for dev tools
window.React = React;

React.render(
  <APP />,
  document.getElementById('main'));

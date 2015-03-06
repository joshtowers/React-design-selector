/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router-component');
var Template = require('./app-template.js');
var Manufacturer = require('./manufacturer/app-manufacturer.js');
// var Design = require('./design/app-design.js');
var DesignSelector = require('./design/DesignSelector.react.js');
var Palette = require('./palette/app-palette.js');
var Layout = require('./layout/app-layout.js');

var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;

var APP =
  React.createClass({
    render:function(){
      return (
        <Template>
          <Locations>
            <Location path="/" handler={DesignSelector} />
            <Location path="/layout" handler={Layout} />
            <Location path="/palette" handler={Palette} />
          </Locations>
        </Template>
        )
    }
  });
module.exports = APP;

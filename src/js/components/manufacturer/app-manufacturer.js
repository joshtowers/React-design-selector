/** @jsx React.DOM */
var React = require('react');
Link = require('react-router-component').Link;

var Manufacturer =
  React.createClass({
    render:function(){
        return (
          <div>
            <h2>Choose Manufacturer</h2>
            <Link href={'/design'}>Design</Link>
          </div>

        )
    }
});
module.exports = Manufacturer;

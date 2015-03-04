/** @jsx React.DOM */
var React = require('react');
var LayoutItem = require('../layout/app-layoutitem.js');
var AppStore = require('../../stores/app-store.js');

var layoutItems =
	React.createClass({
		render:function(){
			var items = this.props.layout.map(function(name){
				var style = '';
				if(name == AppStore.getSelectedLayout()) {
					style = 'focused';
				}
				return (
					<li className={style + ' col-xs-8 col-md-2'}>
						<LayoutItem layoutName={name} designName={this.props.design} />
					</li>
				)
			}, this)
			return (
				<ul className="layout-selector-list">
					{items}
				</ul>
			)
		}
	});
module.exports = layoutItems;

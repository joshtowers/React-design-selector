var React 					= require('react');
var AppStore 				= require('../../stores/app-store.js');
var CatDesign 			= require('./app-catdesign.js')

var Component = React.createClass({

	getDefaultProps: function() {
		return {
			designs: AppStore.getDesigns()
		};
	},
	render: function() {

		var designListItems = this.props.designs.map(function(design){
			return <CatDesign design={design} />
		})

		return (
			<div>
			<ul className="design-selector-list">
				{designListItems}
			</ul>
			</div>
		);
	}

});

module.exports = Component;

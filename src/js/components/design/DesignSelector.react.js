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

		var designListItems = this.props.designs.map(function(design) {
			return <CatDesign key={design.DesignName} design={design} />
		});

		return (
			<div className="row container design-selection-wrapper">
				<div className="col-xs-8">
					<div className="row">
						<ul className="design-selector-list">
							{designListItems}
						</ul>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Component;

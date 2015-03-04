var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/app-constants');
var assign = require('object-assign');

var Data = require('../stores/app-data');
var CHANGE_EVENT = "change";


var _fordSkinCatalog = Data;
var _pageState = "palette";
var _designSelectedDisplayName = "Ford Unity";
var _designSelectedDesignName = "FordUnity";
var _designSelectedLayoutName = "A";

// Update the design with a display name and design name
// Display name - Ford Unity
// Design name - FordUnity
function _updateDesign(names) {
	var designName = names[0];
	var displayName = names[1];
	_designSelectedDisplayName = displayName;
	_designSelectedDesignName = designName;
}

// Update the current layout selected
function _updateLayout(name) {
	_designSelectedLayoutName = name;
}

// update what page you're on... (???)
function _updatePageState(page) {
	console.log(page);
	// _pageState = page;
}

var AppStore = assign({}, EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT)
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback)
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback)
	},

	// get the full list of designs from data
	getDesigns: function() {
		return _fordSkinCatalog
	},

	// find the design you're on and
	// return an array of layouts available
	getLayouts: function() {
		var designs = this.getDesigns();
		var selectedDesign = this.getSelectedDesignDesignName();
		var layouts = "";

		designs.map(function(design) {
			if (design.DesignName == selectedDesign) {
				layouts = design.Layouts;
			}
		});

		return layouts;
	},

	// get the currently selected layout
	getSelectedLayout: function() {
		return _designSelectedLayoutName;
	},

	// get currently selected Design Display Name - Ford Unity
	getSelectedDesignDisplayName: function() {
		return _designSelectedDisplayName;
	},

	// get currently selected Design Name - FordUnity
	getSelectedDesignDesignName: function() {
		return _designSelectedDesignName;
	},

	// get the current page
	getCurrentPage: function() {
		return _updatePageState;
	}
});

AppDispatcher.register(function(action) {
	switch (action.actionType) {
		case AppConstants.UPDATE_DESIGN:
			_updateDesign(action.design);
			break;

		case AppConstants.UPDATE_LAYOUT:
			_updateLayout(action.layout);
			break;
	}
	AppStore.emitChange();
});

module.exports = AppStore;

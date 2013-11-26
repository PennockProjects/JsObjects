/*		
	@author John Pennock
	Date: 11/25/13
	Description :  These are simple objects for the factory, some of the objects are subclassed on to other objects.
	Updates
	who				date					reason
	<name>			<date>					<description>
*/
/*jshint devel:true, strict: true */

	ObjectBase = (function() {'use strict';

		function ObjectBase() {
		}

		ObjectBase.prototype.getSet = function(init) {
			var value = init;
			return {
				set: function(newValue) { value = newValue; },
				get: function() { return value; },
				enumerable : false,
				configurable : true
			};
		};
	
		return ObjectBase;
	})();
	
	
	// Controller Objects
	PlaneController = (function() {'use strict';
		// Constructor
		var PlaneController = function(jsonInit) {
			var _color = jsonInit.color;
			Object.defineProperty(this, 'color', this.getSet(_color));
		};
		
		// Inherit from the Base Object	
		PlaneController.prototype = new ObjectBase();
	
		// Private Methods
		var getColor = function() {
			this.color;
		};
	
		// Public Methods - based on the javascript prototype
		PlaneController.prototype.findColor = function() {
			return getColor();							// public method call of a private method
		};
		
	
		return PlaneController;
	})();
	
	
	CarController = (function() {'use strict';
		// Constructor
		var CarController = function(jsonInit) {
			  // some defaults
			var _doors = jsonInit.doors || 4;
			this.state = jsonInit.state || "brand new";				// no backing field?
			var _color = jsonInit.color;
			Object.defineProperty(this, 'doors', this.getSet(_doors));
			Object.defineProperty(this, 'color', this.getSet(_color));
		};
		
		// Inherit from the Base Object	
		CarController.prototype = new ObjectBase();
	
		// Private Methods
		var getColor = function() {
			this.color;
		};
	
		// Public Methods - based on the javascript prototype - also the abstract factory requirement
		CarController.prototype.findColor = function() {
			return getColor();							// public method call of a private method
		};
		
	
		return CarController;
	})();
	
	// Sub-class of car - has
	CarControllerView = (function() {'use strict';
		// Constructor
		var CarControllerView = function(jsonInit) {
			
			// Add a new variable
			var _view = jsonInit.view || "<p></p>";
			Object.defineProperty(this, 'view', this.getSet(_view));
			
			// chain to the superclass constructor
			CarController.call(this, jsonInit);
		};
		
		// Inherit from the superclass CarController
		CarControllerView.prototype = Object.create( CarController.prototype );
	
		return CarControllerView;
	})();
	
	
	
	TruckController = (function() {'use strict';
		// Constructor
		var TruckController = function(jsonInit) {
			  // some defaults
			var _state = jsonInit.state || "used";
			var _wheelSize = jsonInit.wheelSize || "large";
			var _color = jsonInit.color || "blue";
			Object.defineProperty(this, 'doors', this.getSet(_state));
			Object.defineProperty(this, 'wheelSize', this.getSet(_wheelSize));
			Object.defineProperty(this, 'color', this.getSet(_color));
		};
		
		// Inherit from the Base Object	
		TruckController.prototype = new ObjectBase();
	
		// Private Methods
		var getColor = function() {
			this.color;
		};
	
		// Public Methods - based on the javascript prototype - also the abstract factory requirement
		TruckController.prototype.findColor = function() {
			return getColor();							// public method call of a private method
		};
		
	
		return TruckController;
	})();



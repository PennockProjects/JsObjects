Abstract Factory
===============

I create Five Module Pattern javascript objects in *Vehicles.js*

1. ObjectBase is a 'superclass' which provides the field/property getters/setters  
2. Plane is a 'child' of ObjectBase  
3. Truck is a 'child' of ObjectBase  
4. Car is a 'child' of ObjectBase and the superclass of CarView  
5. CarView is a 'child' of Car  (it has all of car's methods and properties plus additional ones.  It is a grandchild of ObjectBase)  

the module pattern I use is one that I've developed that meets my objectives of a module pattern.  There are many variations.  Here is my module pattern I use:

	ModulePattern = (function() {'use strict';
	
		// public static variables are defined here
		var publicStaticVariable;    // this variable is shared by all objects based on this module pattern class
	
		// Constructor
		var ModulePattern = function() {
			// private instance variables are stored here
			var privateInstanceVariable;		// this variable has data per object based on this module pattern class
			var instanceVariable;				// this variable has data per object, private now but defined public later
			// public instance accessors for private instance data, using base class getSet
			Object.defineProperty(this, 'publicInstanceVariable',	this.getSet(instanceVariable));
		};
		
		// Inherit from the Base Object	
		ModulePattern.prototype = new ObjectBase();
	
		// Private Methods
		var privateMethod = function() {
			this.fromJSON();				// private method call of a public method
		};
	
		// Public Methods - based on the javascript prototype
		ModulePattern.prototype.publicMethod = function() {
			return privateMethod();							// public method call of a private method
		};
		
		// fromJSON - populate the object data based on a JSON object
		ModulePattern.prototype.fromJSON = function(dataJSON) {
			/*jshint curly: false */
			// note, that this function can not set the private instance variables, only public instance variables
			if (dataJSON.publicInstanceVariable !== undefined)
				this.publicInstanceVariable = dataJSON.publicInstanceVariable;
			// note, that storing the public static may not make sense, but showing the pattern anyway
			if (dataJSON.publicStaticVariable !== undefined)
				publicStaticVariable = dataJSON.publicStaticVariable;
		};
	
		// toJSON - returns a JSON object of module pattern object's public variables
		ModulePattern.prototype.toJSON = function() {
			return {
				"publicInstanceVariable": this.publicInstanceVariable,
				"publicStaticVariable": publicStaticVariable
			};
		};
	
		return ModulePattern;
	})();

 

*AbstractFactory.js* has three parts
  
1. Stores and array of module pattern enclosures by type name in an array called types.  
2. Method to register a Vehicle type  
3. Method to get a new instances of different Vehicles using the type name  

In *TestAbstractFactory.js*, I perform the following procecedures

1. I register Plane, Truck, Car, and CarView as vehicle types  
2. I create a plane, a truck, 2 cars and a carView.  
3. I run tests to prove that the properties are unique and behaving as I expect.  

Note: this project has no real UI.  The the fun happens in the jasmine unit tests - TestAbstractFactory.js

This project was created from 

1) Addy Osmani's interesting tutorial at:  http://addyosmani.com/resources/essentialjsdesignpatterns/book/ 
2) Charles Calvert's JSObjects AngularKarma template at: https://github.com/charliecalvert/AngularKarma 

I added module patterns to Osmani abstract factory and I removed the angular from Calvert AngularKarma.  What I left from Calvert AngularKarma was: 

- Grunt
- Jasmine
- Karma

Here are they key instructions to use those features:


To get started, run **npm install** in the root directory for this
project:

	npm install

Next, start Karma by typing **karma start**:

	karma start

Periodically, you should go to the command line in the root directory
for this folder and run **grunt jshint**.

	grunt jshint
	
You should then examine the **result.xml** file to look for any problems
in your code.

- [GitHub Repository for this Project](https://github.com/charliecalvert/AngularKarma)
- [Angular Site](http://www.angularjs.org/)
- [Jasmine](http://pivotal.github.io/jasmine/)
- [Charlies Video on Jasmine](http://youtu.be/W1p6T_KXLyI)
- [Jasmine Matchers](https://github.com/JamieMason/Jasmine-Matchers)
- [Why Jasmine](https://github.com/pivotal/jasmine/wiki/Background)
- [Karma](http://karma-runner.github.io/0.10/index.html)
- [Karma Config Reference](http://karma-runner.github.io/0.8/config/configuration-file.html)
- [Karma](https://github.com/karma-runner)


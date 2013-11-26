/**
 * @author John Pennock
 */

describe("Test Main", function() {'use strict';
	var mainController = null;	


	// Usage: 
	AbstractFactory.registerVehicle( "plane", PlaneController);
	AbstractFactory.registerVehicle( "car", CarController );
	AbstractFactory.registerVehicle( "carView", CarControllerView);
	AbstractFactory.registerVehicle( "truck", TruckController );
	
	// Instantiate a new car based on the abstract vehicle type
	var plane = AbstractFactory.getVehicle( "plane" , { 
	            color: "Assidia", 
	            swallow: "Swallow" } );
	
	var car = AbstractFactory.getVehicle( "car" , { 
	            color: "lime green", 
	            state: "like new" } );
	            
	var car2 = AbstractFactory.getVehicle( "car" , { 
	            color: "blue", 
	            state: "old" } );   
	            
	var carView = AbstractFactory.getVehicle( "carView", {
				color: "pink",
				state: "used",
				view: "<li></li>"
	}) ;       
	            
	var truck = AbstractFactory.getVehicle( "truck" , { 
	            wheelSize: "medium", 
	            color: "neon yellow" } );
                    
            
	it("Check plane", function() {
		var actual = plane.color;		
		expect(actual).toEqual('Assidia');
		expect(plane.swallow).toEqual(undefined);
	});
		
	it("Check car", function() {
		expect(car.color).toEqual('lime green');
		expect(car.state).toEqual('like new');
		expect(car.doors).toEqual(4);		
	});	

	it("Check car2", function() {
		expect(car2.color).toEqual('blue');
		expect(car2.state).toEqual('old');
	});	

	it("Check truck", function() {
		expect(truck.wheelSize).toEqual('medium');
		expect(truck.color).toEqual('neon yellow');
	});	
	
	it("Check subclass CarView", function() {
		expect(carView.color).toEqual('pink');
		expect(carView.state).toEqual('used');
		expect(carView.doors).toEqual(4);
		expect(carView.view).toEqual("<li></li>");		
	});	

});



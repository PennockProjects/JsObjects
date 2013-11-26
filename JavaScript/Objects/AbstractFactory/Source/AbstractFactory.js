/*
  	@author John Pennock
	Date: 11/25/13
	Description :  <insert description>
	Updates
	who				date					reason
	<name>			<date>					<description>
*/
/*jshint devel:true, browser:true, strict: true */

var AbstractFactory = (function () {

    // Storage for our vehicle module pattern types
    var types = {};

    return {
        getVehicle: function ( type, customizations ) {
            var Vehicle = types[type];

            return (Vehicle ? new Vehicle(customizations) : null);
        },

        registerVehicle: function ( type, Vehicle ) {
            var proto = Vehicle.prototype;

            // only register classes that fulfill the factory contract
            if ( proto.findColor ) {
                types[type] = Vehicle;
            }

            return AbstractFactory;
        }
    };
})();


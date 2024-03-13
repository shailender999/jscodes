/*

    Design a Parking System in JS.
    


    Approach:
        1. Create a function constructor ParkingLot which will create the parking system with required capacity of car and bike.
            It should have below methods:-
            1. "occupy" to assign a parking space to a vehicle
            2. "vacate" to free a parking space
        2. Create a function constructor ParkingSpace which will have the properties like 
            id (vehicle id), type(car, bike, etc), occupied (true / false)
        3. Parking lot should have below methods:-
            1. "findAvailableSpace" to find available space in parking lot
            2. "parkVehicle" to park a vehicle
            3. "vacateParking" to vacate the parking space
*/

const { ParkingLot } = require('./parkingLot');


const parkingLot = new ParkingLot({car : 3, bike : 3});
parkingLot.parkVehicle("car");
parkingLot.parkVehicle("car");
parkingLot.parkVehicle("car");
parkingLot.parkVehicle("car");
parkingLot.parkVehicle("bike");
parkingLot.parkVehicle("bike");
parkingLot.vacateParking(2);
console.log(parkingLot.spaces);
parkingLot.parkVehicle("car");
console.log(parkingLot.spaces);
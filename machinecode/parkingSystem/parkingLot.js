// Define a constructor function to represent the entire parking facility

const { ParkingSpace } = require('./parkingSpace');

function ParkingLot(requirement) {
    this.capacityCar = requirement.car || 0;
    this.capacityBike = requirement.bike || 0;
    this.spaces = [];
    this.initializeSpaces();
}

ParkingLot.prototype.initializeSpaces = function() {
    for(let i =0; i<this.capacityCar; i++) {
        this.spaces.push(new ParkingSpace(i, 'car'));
    }
    for(let i =this.capacityCar; i< (this.capacityCar + this.capacityBike); i++) {
        this.spaces.push(new ParkingSpace(i, 'bike'));
    }
}

ParkingLot.prototype.findAvailableSpace = function(type) {
    return this.spaces.find(space => !space.occupied && space.type === type);
}

ParkingLot.prototype.parkVehicle = function(type) {
    const space = this.findAvailableSpace(type);
    if(space) {
        space.occupy();
        console.log(`vehicle parked at ${space.id}`);
    } else {
        console.log(`No Available ${type} parking space`);
    }
}

ParkingLot.prototype.vacateParking = function(id) {
    const space = this.spaces.find(space => space.id === id);
    if(space) {
        space.vacate();
        console.log(`Parking space ${id} vacated!`);
    } else {
        console.log(`Invalid parking space Id`);
    }
}


module.exports = {ParkingLot}
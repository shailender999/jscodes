

// Create a constructor function which will represent individual parking spaces

function ParkingSpace(id, type) {
    this.id = id;
    this.type = type;
    this.occupied = false;
}

ParkingSpace.prototype.occupy = function() {
    this.occupied = true;
}

ParkingSpace.prototype.vacate = function() {
    this.occupied = false;
}

module.exports = {ParkingSpace}
// Code your solution in this file!

// Declare const returnFirstTwoDrivers 

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const twoDrivers = drivers.slice(0,2);
const lastDrivers = drivers.slice(-2);

function returnFirstTwoDrivers(){
    return twoDrivers;
}

function returnLastTwoDrivers(){
    return lastDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//returns a function; should multiple a given value using created multiplier

const createFareMultiplier = function (num) {
    return function(fare){
        return num * fare
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(drivers,func){
    return func(drivers);
}

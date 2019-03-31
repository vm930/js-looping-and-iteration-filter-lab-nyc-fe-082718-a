// Code your solution in this file
function findMatching(drivers,str){
    return drivers.filter(function (driver){
        return driver.toLowerCase() === str.toLowerCase()
    })
}
function fuzzyMatch(drivers, str){
    let nameLength = str.length;
    return drivers.filter(function(driver){
        return driver.slice(0, nameLength) === str;
        });
    }

function matchName(drivers,str){
    return drivers.filter(function (driver) {
        return driver.name === str;
    })
}
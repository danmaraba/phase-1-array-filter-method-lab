// Code your solution here

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
//  const findMatching=drivers.filter(function (names) {
//     return['Bobby', 'Sammy', 'Bobby'] 
// })
// console.log(findMatching)



function findMatching(drivers, name){
    return drivers.filter(function (d) {return (d.toUpperCase() == name.toUpperCase())});
}

function fuzzyMatch(drivers, name){
    return drivers.filter(function (d) {return (d.charAt(0) === name.charAt(0))});
}

function matchName(driver, str){
    return driver.filter(function (d) {return (d.name === str)});
}
    
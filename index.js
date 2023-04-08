function findMatching(array, string){
    let matchedDrivers = array.filter(function(element){
        return element.toUpperCase() === string.toUpperCase()

    })
    return matchedDrivers
}
function fuzzyMatch(array, string){
    let matchedDrivers = array.filter(function(element){
        return element[0] === string[0]
    })
    return matchedDrivers
}
function matchName(array, string){
    let matchedDrivers = array.filter(function(element){
        return element.name === string
    })
    return matchedDrivers
}
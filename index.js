function findMatching(array, name){
    const matchingNames = array.filter(function(item){
        if (item === item.toLowerCase()){
            return item === name.toLowerCase();
        } else {
            return item === name;
        }
    })
    return matchingNames;
}

function fuzzyMatch(array, string){
    const matchingNames = array.filter(function(item){
        return item.slice(0, string.length) === string})
    return matchingNames;
}

function matchName(array, string){
    const matchingDrivers = array.filter(function(item){
        return item.name === string;
    })
    return matchingDrivers;
}
// Code your solution here

function findMatching(arr, name) {
    return arr.filter((el) => el.toLowerCase().includes(name.toLowerCase()));
}

function fuzzyMatch(arr, letters) {
    letters = letters.toLowerCase()
    let matched = arr.filter(name => {
        const lowerCaseName = name.toLowerCase();
        return lowerCaseName.startsWith(letters);
             })
    return matched
}

function matchName(arr, namev){
    return arr.filter((record) => record.name === namev);
}

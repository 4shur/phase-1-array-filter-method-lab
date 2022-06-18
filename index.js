// Code your solution here
function findMatching(array,name){
    for (const user of array) {
        if (user === name){
            return name
        }
    }
}
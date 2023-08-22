// // const driverNames = ['Antonia', 'Nuru', 'Amari', 'Mo']
// // const returnFirstTwoDrivers = ['Antonia', 'Nuru']
// // function returnFirstTwoDrivers() {
// //     returnFirstTwoDrivers();
// // }
// const returnFirstTwoDrivers = function firstTwoDrivers(x) {
//     return [x[0], x[1]];
// }
// // I can use slice.
// const returnLastTwoDrivers = function (x) {
//     return [x[x.length-2], x[x.length-1]]
// }
// const selectingDrivers = [returnFirstTwoDrivers ,returnLastTwoDrivers]
// const createFareMultiplier = function (x){
//     return function(){

//     }
// }


// // array w n3ml new array n3rf beh length el array without touching the array
// // function newArray()

const returnFirstTwoDrivers = function(x) {
    return x.slice(0,2);
}
function returnLastTwoDrivers(x){
    return x.slice(2,4)
}
const selectingDrivers = [returnFirstTwoDrivers ,returnLastTwoDrivers]
const createFareMultiplier = function (fareMultiplier){
    return function(fare){
        return fare*fareMultiplier

    }
}
const fareDoubler= function createFareDoubler(fare){
    return fare*2
}
const fareTripler= function createFareMultiplier(fare){
    return fare*3
}
const selectDifferentDrivers= function (arrayOfDrivers,selectDriverFunction){
    return selectDriverFunction(drivers)
}

// array w n3ml new array n3rf beh length el array without touching the array
// function newArray(){
// return 

// const arr = ["ann","7nan","ana","anoona"]
// function mapToIndices(arr){
// const newArr = arr.map((value, index, array) => array);
// }

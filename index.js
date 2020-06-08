// Code your solution in this file!

const returnFirstTwoDrivers = function(arrayOfDrivers){
  return arrayOfDrivers.slice(0, 2);
};

const returnLastTwoDrivers = function(arrayOfDrivers){
  return arrayOfDrivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplyIntegar){
  return function(integar){
    return integar * multiplyIntegar;
  };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

<<<<<<< HEAD
function selectDifferentDrivers(arrayOfDrivers, returnLastTwoDrivers){
  return returnLastTwoDrivers(arrayOfDrivers)
=======
selectDifferentDrivers(arrayOfDrivers, returnLastTwoDrivers){
  return returnLastTwoDrivers
>>>>>>> af9fc458a6f3605b0786ac412b563370618186e5
}
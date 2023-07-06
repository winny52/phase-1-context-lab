/* Your Code Here */
const createEmployeeRecord = function (recordArray) {
    let testEmployee = {
     firstName: recordArray[0],
     familyName: recordArray[1],
     title: recordArray[2],
     payPerHour: recordArray[3],
     timeInEvents: [],
     timeOutEvents: [],
   };
   return testEmployee;
 };


 const createEmployeeRecords = function (recordsArr){
 return recordsArr.map(elem => {
   return  createEmployeeRecord(elem);
 })
 }

 const createTimeInEvent = function(date){
   let yourDate = date.split(" ");
   let inTime = {
     type: "TimeIn",
     hour: parseInt(yourDate[1]),
     date: yourDate[0],
   };
 this.timeInEvents = [...this.timeInEvents, inTime];
 return this;
 }


 const createTimeOutEvent = function(date){
   let yourDate = date.split(" ");
   let outTime = {
     type: "TimeOut",
     hour: parseInt(yourDate[1]),
     date: yourDate[0],
   };

   this.timeOutEvents = [...this.timeOutEvents, outTime];
   return this;
 }


 const hoursWorkedOnDate = function(date){
 for (let i = 0; i < this.timeInEvents.length; i++) {
   if (date === this.timeInEvents[i].date) {
     let arrivalTime = this.timeInEvents[i].hour;
     let departureTime = this.timeOutEvents[i].hour;
     let timeTaken = departureTime - arrivalTime;
     return timeTaken / 100;
   }
 }
 }


 const wagesEarnedOnDate = function(date){
   let timeTaken = hoursWorkedOnDate.call(this, date);
   return timeTaken * this.payPerHour;
 }


 const findEmployeeByFirstName = function(srcArray,firstName){
 let targetArr = srcArray.find((elem)=>{
 return elem.firstName === firstName;
 })
 return targetArr;
 }
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


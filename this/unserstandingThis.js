var person = {
    "firstName": "Moshiour",
    "lastName": "Rahman",
    "getFullName": function () {
        return person.firstName + " " + person.lastName;
    },
    "address": {
        "street": "123 JS Street",
        "city": "JS",
        "state": "CA"
    },
    "isFromState": function (state) {
        /*    if (state===this.address.state) {
         return true;
         }*/
        return state === this.address.state;
    }
};

console.log(person.isFromState("CA"));
console.log(person.isFromState("NEW"));
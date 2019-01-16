// Use .map to create a new array of objects where each object has a property for petnumber and pettype based on the elements in the array.
// Print the new array of objects.


let petArray = ["cat", "dog", "mouse"];

function petType(value,index) {
    let newPet = {};
    newPet.pettype = value;
    newPet.petnumber = index;
    return newPet;
};
var newPetArray = petArray.map(petType);

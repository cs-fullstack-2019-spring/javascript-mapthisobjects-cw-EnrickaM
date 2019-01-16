// Use .filter to create an array of pet objects that only holds the hamsters.

let pets = [
    {
        name: 'Spot',
        type: 'Hamster'
    },
    {
        name: 'Harry',
        type: 'Hamster'
    },
    {
        name: 'Kitty',
        type: 'Cat'
    }
];
 var whatPets = pets.filter (function (animal) {
     return animal.type === "Hamster";

 });



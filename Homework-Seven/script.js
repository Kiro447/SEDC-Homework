let animal = {
    name: '',
    breed: '',
    speak: function (message) {
        console.log(`${this.name} is a ${this.breed} and shouts ${message} `);
    }
}

let btn = document.getElementById("btn")

btn.addEventListener('click', (ev) => {
    ev.preventDefault();
    function createNewAnimal() {
        let name = document.getElementById("animalName").value;
        let breed = document.getElementById("animalBreed").value;
        let newAnimal = Object.create(animal)
        newAnimal.name = name,
            newAnimal.breed = breed,
            newAnimal.speak('HelloW0rld')
    }
    createNewAnimal()
})
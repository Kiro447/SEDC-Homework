
// let button = document.getElementById("kopce");

let dog = [];

// button.addEventListener('click', () => {
  const addNewDog = (ev) => {
    ev.preventDefault();
    let newDog = {
        name: document.querySelector("#dogName").value,
        breed: document.querySelector("#dogBreed").value,
        speak: function(){
            let speakng = document.querySelector("#dogSpeak").value
            if(this.speakng === 'yes'){
                console.log('Yee my dog can speak');
            } else{
                console.log('My dog cannot speak :(');
            }}

    }
    dog.push(newDog)
    console.log('added',{dog});
}
    document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById("btn").addEventListener('click', addNewDog)
    })




// animal.speak()
// console.log(animal.name);
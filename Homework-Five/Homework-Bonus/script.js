let recipeName = prompt('Enter the name of your recipe');
let tbody = document.querySelector('tbody');
function recipes() {
    let counter = 0;
    let listOfIngridients = [];
    let numberOfIngridients = parseInt(prompt('Enter the number of ingridients of the recipe'))
    while (counter < numberOfIngridients) {
        let ingridientsName = prompt('Enter your Ingridients one by one')
        listOfIngridients.push(ingridientsName);
        counter++
    }
    tbody.innerHTML += `
        <tr>
        <td>${recipeName}</td>
        <td>${listOfIngridients}</td>
        </tr>
        `
}
recipes()
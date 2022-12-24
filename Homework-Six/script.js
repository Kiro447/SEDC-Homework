let mainDiv = document.getElementById('main');
let inputRow = document.getElementById('rows');
let inputColumn = document.getElementById('column')
let buttonGen = document.getElementById('btn');

let table = document.createElement('table');
let tbody = document.createElement('tbody');
table.style = "border: 1px solid black";
table.appendChild(tbody);
mainDiv.appendChild(table);

buttonGen.addEventListener('click', ()=>{
    let row = inputRow.value;
    let column = inputColumn.value;
    for (let i = 0 ; i < row; i++){
        let rowCreated = document.createElement('tr');
        rowCreated.style = "border: 1px solid black; height: 3rem;";;
        for (let j = 0 ; j < column ; j++){
            let columnCreated = document.createElement('td');
            columnCreated.style = "border: 1px solid black; font-size: 1em; width: 10rem"
            columnCreated.innerText = `Row-${i+1} column-${j+1}`;
            rowCreated.appendChild(columnCreated);
        }
        tbody.appendChild(rowCreated)
    }
})
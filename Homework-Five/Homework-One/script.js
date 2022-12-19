let allParas = document.querySelectorAll('p');
let headersOne = document.querySelectorAll('h1')
let headersThree = document.querySelector('h3');
for (let text of allParas){
    text.innerText = "inner text of the paragraphs"
}
for (let text of headersOne){
    text.innerText = "inner text of the headers 1 "
}
headersThree.innerText = " this is header 3 "
const firstNames = ['Marko', 'Filip', 'Stefan'];
const lastNames = ['Jordanov', 'Stefanov', 'Panovski'];


const newArray = firstNames.map(function (value, index) {
  return (value + ' ' + lastNames[index]);
});
console.log(newArray);

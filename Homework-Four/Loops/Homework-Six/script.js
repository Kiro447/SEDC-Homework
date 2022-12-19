let firstNames = ['Marko', 'Filip', 'Stefan']
let lastNames = ['Jordanov', 'Stefanov', 'Panovski']


function fullName(firstNames, lastNames) {
  for (let i = 0; i < firstNames.length && i < lastNames.length; i++) {
    console.log(`${i + 1}.${firstNames[i]} ${lastNames[i]}`)

  }
}
fullName(firstNames, lastNames)

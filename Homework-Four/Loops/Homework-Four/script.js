for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        let evenNumbers = i;
        console.log(evenNumbers);
        console.log('\n')
        continue;
    } else if (i % 2 === 1) {
        let oddNumbers = i;
        console.log(oddNumbers)
        continue;
    }
}

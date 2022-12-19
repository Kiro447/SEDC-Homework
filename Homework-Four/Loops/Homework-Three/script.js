const arrayOfStrings = ['Hello', 'there', 'students', 'of', 'SEDC', '!'];


function arrayMerger(arrayOfString) {
    let newArr = ""
    for (nums of arrayOfString) {
        newArr = newArr + nums + " ";
    }
    alert(newArr)
}

arrayMerger(arrayOfStrings);
